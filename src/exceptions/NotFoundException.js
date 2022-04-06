const Exception = require('./Exception');

class NotFoundException extends Exception {
    constructor(message, data) {
        super(message, 404, 'Not Found Exception', data);
    }
}

module.exports = {
    NotFoundException
}