const VehicleModel = require("../models").VehicleModel;

exports.create = (req, res) => {

    console.log(req.body);

    // Validate request
  if (!req.body.registrationNumber) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const vehicle = new VehicleModel(req.body);
  // Save Tutorial in the database
  vehicle
    .save(vehicle)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  VehicleModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Vehicle with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Vehicle with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  VehicleModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

exports.loadAllVehicle = (req, res) => {
  VehicleModel.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicle."
      });
    });
};