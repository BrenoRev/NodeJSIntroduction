const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const userController = require('./src/controllers/userController');
const middlewareLocal = require('./src/middlewares/middlewareLocal');

route.get('/', middlewareLocal, homeController.index);
route.post("/" , middlewareLocal, homeController.postUser);

route.get('/usuarios', middlewareLocal, userController.getLivros);


module.exports = route;