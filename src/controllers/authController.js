const {UserModel} = require('../models/index');
const {apiResponse} = require('../utils/common');

const login = (req, res, next) => {
    try {
        return res.send('testing2222');
    }catch (e) {
        console.log('error', e);
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
        const {firstName, lastName, email, mobile, roles} = req.body;

        const user = new UserModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            roles: roles
        });

        await user.save();
        if(user._id) {
            return res.send(apiResponse(200, 'user created Success', []));
        }
        return res.send(apiResponse(800, 'user not created',[]));

    }catch (e) {
        return  res.send(apiResponse(800, 'exeception', e.message));
    }
}


module.exports = {
    login,
    logout,
    register
}