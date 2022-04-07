const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth.config');
const {UnAuthorizedException, NotFoundException, BadRequestException} = require('../exceptions/index');
const {UserModel} = require('../models/index');

const {db} = require('../models/index');

const verifyToken = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader) return next( new UnAuthorizedException('Authorization Headers required'));

        if(authHeader.split(' ')[0] !== 'Bearer') return next( new UnAuthorizedException('Token should be bearer'));

        const token = authHeader.split(' ')[1];

        if(!token) return next(new UnAuthorizedException('Token is required'));

        const payload = jwt.verify(token, authConfig.secret);

        const user = await UserModel.findOne({ _id: payload._id }).select('+jwtTokens').exec();

        if(!user) return next(new NotFoundException('User not found'));

        if(!user.jwtTokens.includes(token)) return next( new BadRequestException('Already logout!! please login again'));

        if(user.locked) return next( new BadRequestException('User locked!'));

        if(!user.isActive) return next(new BadRequestException('User account locked. please contact admin'));

        req.user = user;
        return next();

    }catch (e) {
        return next(new UnAuthorizedException(e.message));
    }
}

const isAdmin = (req, res, next) => {

}

module.exports = {
    verifyToken,
    isAdmin
}
