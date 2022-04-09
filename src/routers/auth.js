const express = require('express');
const authRouter = express.Router();
const { body } = require('express-validator');


const authController = require('../controllers/authController');
//const {signUpRequest} = require('../middlewares/httpRequests/SignUpRequest');
const {validate} = require('../middlewares/httpRequests/Validate');


const signUpValidator = [
        body("username").isEmail().withMessage('user name required'),
        body("password").isAlphanumeric().isLength({min: 3}).withMessage('password required')
    ];
authRouter.post('/login',validate ,authController.login);
authRouter.post('/register', authController.register);
authRouter.post('/logout', authController.logout);

module.exports = {
    authRouter
}