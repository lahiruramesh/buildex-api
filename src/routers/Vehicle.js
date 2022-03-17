module.exports = app => {
    const vehicles = require("../controllers/VehicleController.js");
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/create", vehicles.create);

    app.use('/vehicle', router);
  };