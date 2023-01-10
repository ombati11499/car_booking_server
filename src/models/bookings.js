const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  booking_date_from: {
    type: Date,
  },
  booking_date_to: {
    type: Date,
  },
  no_of_seats: {
    type: Number,
  },
  cost:{
    type:Number,
  },
  selectedCar:{
    ref:'cars',
    carId:mongoose.Types.ObjectId
  },
  assignedBy:{
    ref:'users',
    operatorId:mongoose.Types.ObjectId
  },
  assignedTo:{
    ref:'users',
    driverId:mongoose.Types.ObjectId
  },
});

module.exports = mongoose.model("bookings", userSchema);
