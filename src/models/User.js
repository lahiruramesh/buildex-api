const {Schema, mongoose} = require('mongoose');
const moment = require('moment-timezone');

const UserSchema = mongoose.model("User", new Schema({
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
    }

}, { timestamps: { currentTime: () => moment().format() } }));

module.exports = {
    UserSchema
};
