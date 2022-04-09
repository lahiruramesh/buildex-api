const NotFoundException = require('./NotFoundException');
const BadRequestException = require('./BadRequestException');
const BadGateWayException = require('./BadGatewayException');
const UnAuthorizedException = require('./UnAuthorizedException');

module.exports = {
    NotFoundException,
    BadGateWayException,
    BadRequestException,
    UnAuthorizedException
}