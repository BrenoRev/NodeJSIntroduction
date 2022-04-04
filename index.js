const express = require('express');
const app = express();
const routes = require('./routes');

app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });
    