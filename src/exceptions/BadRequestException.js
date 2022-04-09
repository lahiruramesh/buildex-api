const {Exception} = require('./Exception');

class BadRequestException extends Exception {
    constructor(message, data) {
        super(message, 400, 'Bad Request', data);
    }
}

module.exports = {
    BadRequestException
}