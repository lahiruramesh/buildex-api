const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const VehicleServiceSchema = mongoose.model(
    "vehicleService", 
    new Schema({
        description: String,
        date: Date,
        isActive: Boolean
        
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    VehicleServiceSchema
};