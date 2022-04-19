const {UserModel} = require('../models/index');
const {apiResponse} = require('../utils/common');
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await UserModel.findOne({'email': username}).select('+password +jwtTokens').exec();

        if(!user._id) return res.send(apiResponse(800, 'User not found',[]));
        console.log('user', user.password);
        if(!bcrypt.compareSync(password, user.password)) {
            return res.send(apiResponse(400, 'Password incorrect'));
        }

        const token = UserModel.schema.methods.generateToken(user);
        user.jwtTokens.push(token);

        await user.save();

        return res.send(apiResponse(200, 'OK',{'accessToken': token}));

    }catch (e) {
        return  res.send(apiResponse(800, 'exception', e.message));
    }
}

const profile = async (req, res, next) => {
    try {
        req.user.password = '';
        req.user.jwtTokens = '';
        return res.send(apiResponse(200, 'OK',req.user));
    }catch (e) {
        return  res.send(apiResponse(800, 'exception', e.message));
    }
}

const logout =  async (req, res, next) => {
    try{
        const user = req.user;
        const userObj = await UserModel.findOne({'_id': user._id}).select('+jwtTokens').exec();
        userObj.jwtTokens = [];
        await userObj.save();
        return res.send(apiResponse(200, 'OK','Logout successfully'));
    }catch (e) {
        return  res.send(apiResponse(800, 'exception', e.message));
    }
}

const register = async (req, res, next) => {
    try {
        const {firstName, lastName, email, mobile, roles, password} = req.body;
        console.log('body', req.body);
        const user = new UserModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            roles: roles,
            password: bcrypt.hashSync(password, 8)
        });

        console.log('user', user.password);

        await user.save();
        if(user._id) {
            return res.send(apiResponse(200, 'user created Success', []));
        }
        return res.send(apiResponse(800, 'user not created',[]));

    }catch (e) {
        return  res.send(apiResponse(800, 'exception', e.message));
    }
}


module.exports = {
    login,
    profile,
    logout,
    register
}