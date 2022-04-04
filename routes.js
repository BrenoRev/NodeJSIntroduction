const express = require('express');
const route = express.Router();
const homeControoler = require('./src/controllers/homeController');
const userController = require('./src/controllers/userController');
const middlewareLocal = require('./src/middlewares/middlewareLocal');

route.get('/', middlewareLocal, homeControoler.index);

route.get('/usuarios', middlewareLocal, userController.getLivros);

module.exports = route;