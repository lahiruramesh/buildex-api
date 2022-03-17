const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const VehicleSchema = mongoose.model(
    "vehicle", 
    new Schema({
        registrationNumber: String,
        make: String,
        model: String,
        yom: Number,
        mileage: Number,
        gearType: String,
        fuelType: String,
        options: String,
        engineCapacity: Number,
        isActive: Boolean
        
    })

); 

module.exports = {
    VehicleSchema
};