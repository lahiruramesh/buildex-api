const Exception = require('./Exception');

class UnAuthorizedException extends Exception {
    constructor(message, data) {
        super(message, 401, 'Unauthorized', data);
    }
}

module.exports = {
    UnAuthorizedException
}