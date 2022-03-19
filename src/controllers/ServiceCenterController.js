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

exports.update = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
      if (!req.body.address) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
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

exports.get= (req, res) => {
    ServiceCenterModel.find()
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot get Tutorial . Maybe Tutorial was not found!`
          });
        } else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error getting Tutorial"
        });
      });
};

