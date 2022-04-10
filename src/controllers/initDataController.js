const timetableModel = require("../models").TimetableModel;
const timeslotsModel = require("../models").TimeslotModel;
const appointmentStatusModel = require("../models").AppointmentStatusModel;

exports.insertInitData = async () => {

    // check if timetable already created or else create records
    await timetableModel.find()
    .then(timetableExistData => {

        if(timetableExistData.length == 0) {
            createTimetables();
        } else{
            console.log("initial timetable records exist");
        }
    });

    // check if appointment status already created or else create records
    await appointmentStatusModel.find()
    .then(appointmentStatusExistData => {

        if(appointmentStatusExistData.length == 0) {
            createAppointmentStatus();
        } else{
            console.log("initial appointmentStatus records exist");
        }
    });
  
};

async function createTimetables() {

    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
  const startTime = ["08.00AM", "10.00AM", "12.00PM", "02.00PM", "04.00PM"];
  const endTime = ["10.00AM", "12.00PM", "02.00PM", "04.00PM", "06.00PM"];

  months.forEach(async month => {

    days.forEach(async day => {

        // Create a Timetable records
        const timeTable = new timetableModel({
        month: month,
        day: day,
        isActive: true
        });

        await timeTable.save(timeTable)
        .then(async timeTableData => {

            for(i = 0; i < startTime.length; i++)  {

                const timeslot = new timeslotsModel({
                    startTime: startTime[i],
                    endTime: endTime[i],
                    isActive: true,
                    timetable: timeTableData
                });

                timeslot.save(timeslot);

            }

        });

    });
      
  });

};

async function createAppointmentStatus() {

    const names = ["PENDING", "ACCEPT", "REJECT"];
    const labels = ["Pending", "Accept", "Reject"];

    for(i = 0; i < names.length; i++) {

        const appointmentStatus = new appointmentStatusModel({
            name: names[i],
            label: labels[i]
        });

        await appointmentStatus.save(appointmentStatus);

    }

}