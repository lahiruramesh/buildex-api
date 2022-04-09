const express = require('express');
const serviceCenterRouter = express.Router();

const serviceCenterController = require('../controllers/ServiceCenterController');

serviceCenterRouter.post('/create', serviceCenterController.create);
serviceCenterRouter.get("/get", serviceCenterController.get);
serviceCenterRouter.put("/:id", serviceCenterController.update);
serviceCenterRouter.get("/load-by-owner/:id", serviceCenterController.getByOwner);

module.exports = {
    serviceCenterRouter
}