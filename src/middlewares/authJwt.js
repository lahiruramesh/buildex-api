const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth.config');
const {UnAuthorizedException, NotFoundException} = require('../exceptions/index');
const {UserModel} = require('../models/index');

const {db} = require('../models/index');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) return next( new UnAuthorizedException('Authorization Headers required'));

    if(authHeader.split(' ')[0] !== 'Bearer') return next( new UnAuthorizedException('Token should be bearer'));

    const token = authHeader.split(' ')[1];

    if(!token) return next(new UnAuthorizedException('Token is required'));

    const payload = jwt.verify(token, authConfig.secret);

    const user = await UserModel.findOne({ _id: payload._id }).select('+jwtTokens').exec();

    if(!user) return next(new NotFoundException('User not found'));


}

const isAdmin = (req, res, next) => {

}

module.exports = {
    verifyToken,
    isAdmin
}
