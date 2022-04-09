const { body, validationResult } = require('express-validator');

const signUpRequest =
    [
        body("username").isAlphanumeric().withMessage('user name required'),
        body("password").isAlphanumeric().isLength({min: 3}).withMessage('password required')
    ];

module.exports = {
    signUpRequest
}


