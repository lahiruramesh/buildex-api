const apiResponse = (statusCode, message, data) => {
    return {
        statusCode,
        message,
        data
    }
};

module.exports = {
    apiResponse
}
