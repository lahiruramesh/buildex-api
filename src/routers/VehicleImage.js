const express = require('express');
const vehicleImageRouter = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/vehicleImages')
  },
  filename: (req, file, cb) => {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, 'vehicleImage' + '-' + Date.now() +'.' + extension)
  }
});

var upload = multer({ storage: storage });

const vehicleImageController = require('../controllers/VehicleImageController');

vehicleImageRouter.post('/create', upload.array("file", 10) , vehicleImageController.create);
vehicleImageRouter.get("/get-by-id/:id", vehicleImageController.findOne);
vehicleImageRouter.get("/get-by-vehicle-id/:id", vehicleImageController.findByVehicleId);

module.exports = {
  vehicleImageRouter
}