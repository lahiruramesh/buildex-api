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

        const token = UserModel.schema.methods.generateToken();
        user.jwtTokens.push(token);

        await user.save();

        return res.send(apiResponse(800, 'OK',{'accessToken': token}));

    }catch (e) {
        return  res.send(apiResponse(200, 'exception', e.message));
    }
}

const logout = (req, res, next) => {
    try{
        return res.send('testing');
    }catch (e) {
        console.log('error', e);
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
    logout,
    register
}