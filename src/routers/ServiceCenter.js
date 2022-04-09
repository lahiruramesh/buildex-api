const express = require('express');
const serviceCenterRouter = express.Router();

const serviceCenterController = require('../controllers/ServiceCenterController');

serviceCenterRouter.post('/create', serviceCenterController.create);
serviceCenterRouter.get("", serviceCenterController.get);
serviceCenterRouter.put("/:id", serviceCenterController.update);
serviceCenterRouter.get("/load-by-owner/:id", serviceCenterController.getByOwner);
serviceCenterRouter.get("/load-by-center-id/:id", serviceCenterController.findByServiceCenterId);

module.exports = {
    serviceCenterRouter
}