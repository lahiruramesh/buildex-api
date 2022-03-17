const {Schema} = require('mongoose');
const moment = require('moment-timezone');

const UserSchema = new Schema({
    firstName: {
        type: Schema.Types.String
    },
    lastName: {
        type: Schema.Types.String
    },
    mobile: {
        type: Schema.Types.String,
        index: true,
    },
    email: {
        type: Schema.Types.String,
        index: true,
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            Ref: 'Role',
            autopopulate: true
        }
    ],
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
        type: Schema.Types.Boolean,
        default: false,
    },
    isActive: {
        type: Schema.Types.Boolean,
        default: true,
    }

}, { timestamps: { currentTime: () => moment().format() } });

module.exports = {
    UserSchema
};
