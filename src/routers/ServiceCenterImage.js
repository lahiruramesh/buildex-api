const express = require('express');
const serviceCenterImageRouter = express.Router();

const serviceCenterImageController = require('../controllers/ServiceCenterImageController');

serviceCenterImageRouter.post('/create', serviceCenterImageController.create);
// serviceCenterImageRouter.get("/get", serviceCenterImageController.get);
// serviceCenterImageRouter.put("/:id", serviceCenterImageController.update);

module.exports = {
    serviceCenterImageRouter
}