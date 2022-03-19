const ServiceCenterModel = require("../models").ServiceCenterModel;

exports.create = (req, res) => {

    console.log(req.body);

    // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.address) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
  // Create a Tutorial
  const ServiceCenter = new ServiceCenterModel(req.body);
  // Save Tutorial in the database
  ServiceCenter
    .save(ServiceCenter)
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
