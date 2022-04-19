const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth.config');
const {UserModel} = require('../models/index');
const {apiResponse} = require('../utils/common');

const {db} = require('../models/index');

const verifyToken = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader) return res.send(apiResponse(800, 'Authorization header is required'));

        if(authHeader.split(' ')[0] !== 'Bearer') return res.send(apiResponse(800, 'Token should be bearer'));

        const token = authHeader.split(' ')[1];

        if(!token) return res.send(apiResponse(800, 'Token is required'));
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log('payload', payload);
        const user = await UserModel.findOne({ _id: payload._id }).select('+jwtTokens').exec();

        if(!user) return  res.send(apiResponse(800, 'User Not Found'));

        if(!user.jwtTokens.includes(token)) return res.send(apiResponse(800, 'Already logged out!! please login'));

        if(user.locked) return res.send(apiResponse(800, 'User locked'));

        if(!user.isActive) return res.send(apiResponse(800, 'Your account is locked.'));

        req.user = user;
        return next();

    }catch (e) {
        return res.send(apiResponse(800, 'exception', e.message));
    }
}

const isAdmin = (req, res, next) => {

}

module.exports = {
    verifyToken,
    isAdmin
}
