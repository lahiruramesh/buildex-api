const { Schema } = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const AppointmentSchema = mongoose.model(
    "appointment",
    new Schema({       
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        vehicle: {
            type: Schema.Types.ObjectId,
            ref: "vehicle"
        },
        timeslot: {
            type: Schema.Types.ObjectId,
            ref: "timeslot"
        },
        serviceCenter: {
            type: Schema.Types.ObjectId,
            ref: "serviceCenter"
        },
    },
        {
            timestamps: { currentTime: () => moment().format() }
        })

);

module.exports = {
    AppointmentSchema
};