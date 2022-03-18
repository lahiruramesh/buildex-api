const VehicleImageModel = require("../models").vehicleImageModel;

exports.create = (req, res) => {

    // Validate request
  if (!req.body.originalname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const vehicleImage = new VehicleImageModel(req.body);
  // Save Tutorial in the database
  vehicleImage
    .save(vehicleImage)
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
  VehicleImageModel.findById(id)
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