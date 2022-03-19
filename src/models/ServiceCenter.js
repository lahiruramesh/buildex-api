const {Schema} = require('mongoose');
const moment = require('moment-timezone');
const { default: mongoose } = require('mongoose');

const ServiceCenterSchema = mongoose.model(
    "serviceCenter", 
    new Schema({
        name: String,
        address: String
    },
    { 
        timestamps: { currentTime: () => moment().format() } 
    })

); 

module.exports = {
    ServiceCenterSchema
};