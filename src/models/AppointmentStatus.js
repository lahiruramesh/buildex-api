const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const AppointmentStatusSchema = mongoose.model(
    "AppointmentStatus", 
    new Schema({
        name: String,
        label: String
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })
    

); 

module.exports = {
    AppointmentStatusSchema
};