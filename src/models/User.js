const {Schema, mongoose} = require('mongoose');
const moment = require('moment-timezone');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        index: true,
    },
    roles: [
        {
            type: Schema.Types.Mixed,
        //    Ref: 'Role',
        //    autopopulate: true
        }
    ],
    password: {
        type: String
    },
    jwtTokens: {
        type: [String],
        select: false,
    },
    refreshTokens: {
        type: [Object],
        select: false,
        default: [],
    },
    locked: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },

});

UserSchema.methods.generateToken = function() {
    const {_id, email, roles} = this;
    return jwt.sign(
        {
           _id,
            email,
            roles
        },
        process.env.JWT_SECRET,
        {expiresIn: process.env.TOKEN_EXPIRY_TIME}
    );
}

module.exports = {
    UserSchema : mongoose.model('users', UserSchema)
};
