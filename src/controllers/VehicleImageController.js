const vehicleImageModel = require("../models").vehicleImageModel;
const fs = require('fs');
const path = require('path');

exports.create = (req, res) => {

  console.log(req.body);
  console.log(req.files);

  if(req.files.length > 0) {

    for(i=0; i < req.files.length; i++) {

      const vehicleImage = new vehicleImageModel({
        originalname: req.files[i].originalname,
        generatedName: req.files[i].filename,
        isActive : req.body.isActive,
        vehicle: {
          _id: req.body.vehicleId
        },
        img: {
          data: fs.readFileSync(require('path').resolve(__dirname, "../../" + req.files[i].path)),
          contentType: req.files[i].mimetype
      }
      });
  
      vehicleImage.save(vehicleImage)
          .then(data => {
  
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
              err.message || "Some error occurred while creating the vehicle image."
            });
          });

    }

  }
  
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  vehicleImageModel.findById(id)
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

exports.findByVehicleId = (req,res) => {

  const vehicleId = req.params.id;

  vehicleImageModel.find({"vehicle" : vehicleId})
  .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot get Vehicle image . Maybe Vehicle Image was not found!`
        });
      } else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getting vehicle image"
      });
    });

};