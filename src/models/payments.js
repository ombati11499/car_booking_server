const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  payDate: {
    type: Date,
  },
  payAmount: {
    type: Number,
    },
 paidBy:{
    ref:'users',
    userId:mongoose.Types.ObjectId
  },
  bookingID:{
    ref: 'bookings',
    bookingId:mongoose.Types.ObjectId
  }

});

module.exports = mongoose.model("payments", userSchema);
