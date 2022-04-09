const express = require('express');
const serviceCenterRouter = express.Router();

const serviceCenterController = require('../controllers/ServiceCenterController');

serviceCenterRouter.post('/create', serviceCenterController.create);
serviceCenterRouter.get("", serviceCenterController.get);
serviceCenterRouter.put("/:id", serviceCenterController.update);

module.exports = {
    serviceCenterRouter
}