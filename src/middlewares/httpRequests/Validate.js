const { param, validationResult } = require('express-validator');
const {BadRequestException} = require('../../exceptions/BadRequestException');

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(error => extractedErrors.push({ [error.param]: error.msg }));
    const exception = new BadRequestException('Validation failed', extractedErrors);
    next(exception);
};

const idParamValidator = [
    param('id').notEmpty().withMessage('ID is required'),
    param('id').isMongoId().withMessage('ID should be a mongo ID'),
];

const fileValidator = (req, res, next) => {
    if (!req.file) {
        next(new BadRequestException('file is required'));
    }
    next();
};

module.exports = {
    validate,
    fileValidator,
    idParamValidator
};