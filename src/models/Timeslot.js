const { Schema } = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const TimeslotSchema = mongoose.model(
    "timeslot",
    new Schema({
        startTime: Date,
        endTime: Date,
        isActive: Boolean,
        timetable: {
            type: Schema.Types.ObjectId,
            ref: "timetable"
        }        
    },
        {
            timestamps: { currentTime: () => moment().format() }
        })

);

module.exports = {
    TimeslotSchema
};