const Exception = require('./Exception');

class BadGatewayException extends Exception {
    constructor(message, data) {
        super(message, 500, 'Bad Gateway Exception', data);
    }
}

module.exports = {
    BadGatewayException
}