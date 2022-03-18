const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const TimetableSchema = mongoose.model(
    "timetable", 
    new Schema({
        month: String,
        day: String,
        isActive: Boolean
        
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    TimetableSchema
};