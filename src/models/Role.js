const {Schema} = require('mongoose');
const moment = require('moment-timezone');

const RoleSchema = new Schema({
    name: {
        type: Schema.Types.String
    },
    code: {
        type: Schema.Types.String,
        index: true
    },
    isActive: {
        type: Schema.Types.Boolean,
        default: true
    }

}, { timestamps: { currentTime: () => moment().format() } });

module.exports = {
    RoleSchema
}