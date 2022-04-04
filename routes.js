const express = require('express');
const route = express.Router();
const homeControoler = require('./src/controllers/homeController');
const userController = require('./src/controllers/userController');

route.get('/', homeControoler.index);

route.get('/usuarios', userController.getLivros);

module.exports = route;