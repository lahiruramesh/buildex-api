
const express = require('express')
require('./models');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const envFilePath = path.resolve(__dirname, '.env');
dotenv.config({ path: envFilePath });

const { timeslotRouter,appointmentRouter} = require('./routers/index');

const {authRouter, vehicleRouter, vehicleImageRouter,vehicleServiceRouter,feedbackRouter,serviceCenterRouter,timetableRouter, appointmentStatusRouter} = require('./routers/index');

const app = express();

// parse requests of content-type - application/json
app.use(express.json());
//app.use(bodyParser);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

const port = process.env.SERVER_PORT ? process.env.SERVER_PORT: 3000;

// define routers
app.use('/auth',authRouter);
app.use('/vehicle',vehicleRouter);
app.use("/vehicleImage", vehicleImageRouter);
app.use("/vehicleService", vehicleServiceRouter);
app.use("/feedback", feedbackRouter);
app.use("/timetable", timetableRouter);
app.use("/serviceCenter", serviceCenterRouter);
app.use("/timeslot", timeslotRouter);
app.use("/appointment", appointmentRouter);
app.use("/appointmentStatus", appointmentStatusRouter);

// require("./routers/Vehicle")(app);
// require("./routers/VehicleImage")(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})