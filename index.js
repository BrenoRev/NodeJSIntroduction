require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const mogoose = require('mongoose')

// Vai emitir um evento ( " DB_CONNECTED " ) quando a conexão for estabelecida com sucesso
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB')
            app.emit("DB_CONNECTED")
        }).catch(err => {
            console.log("Erro na conexão com o banco de dados: " + err)
        })

// Criando uma sessão do usuário no navegador salvando as informações no mongodb
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const sessionOptions = session({
    secret: process.env.SECRET_KEY,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

// Rotas
const routes = require('./routes');
// Midlleware
const Middleware = require('./src/middlewares/middlewareGlobal');
// URL
app.use(express.urlencoded({ extended: true }));
// Pasta pública de coisas estáticas
app.use(express.static('public'));
// Template engine front-end
app.set('views', './src/views');
app.set('view engine', 'ejs');
//Midleware global para toda a aplicação
app.use(Middleware);
// Rotas
app.use(routes);

// Só vai startar o servidor quando for emitido a conexão com o banco de dados
app.on('DB_CONNECTED', () => {
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
        });
    });

    