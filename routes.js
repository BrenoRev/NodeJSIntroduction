const express = require('express');
const route = express.Router();
const homeControoler = require('./controllers/homeController');
const userController = require('./controllers/userController');

route.get('/', homeControoler.index);

route.get('/usuarios', userController.getLivros);

module.exports = route;