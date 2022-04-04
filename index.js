const express = require('express');
const app = express();
const routes = require('./routes');
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


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });
    