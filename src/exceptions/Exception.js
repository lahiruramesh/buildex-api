class Exception extends Error {
    constructor(message, statusCode, status, data = {}) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.status = status;
        this.data = data;
    }
}

module.exports = {
    Exception
};