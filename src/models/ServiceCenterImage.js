const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const ServiceCenterImageSchema = mongoose.model(
    "serviceCenterImage", 
    new Schema({
        originalName: String,
        generatedName: String
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    ServiceCenterImageSchema
};