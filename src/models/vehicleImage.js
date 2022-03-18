const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const VehicleImageSchema = mongoose.model(
    "vehicleImage", 
    new Schema({
        originalname: String,
        generatedName: String,
        isActive: Boolean
        
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    VehicleImageSchema
};