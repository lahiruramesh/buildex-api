const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController');

authRouter.get('/login', authController.login);
authRouter.post('/logout', authController.logout);

module.exports = {
    authRouter
}