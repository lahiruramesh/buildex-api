
const express = require('express')
require('./models');
const path = require('path');
const dotenv = require('dotenv');
const envFilePath = path.resolve(__dirname, '.env');
dotenv.config({ path: envFilePath });

const {authRouter, vehicleRouter, vehicleImageRouter,vehicleServiceRouter,feedbackRouter,serviceCenterRouter,timetableRouter,} = require('./routers/index');
const { timeslotRouter} = require('./routers/index');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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



// require("./routers/Vehicle")(app);
// require("./routers/VehicleImage")(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})