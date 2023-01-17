const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    carName: {
        type: String,
        required: true
    },
    dailyRate: {
        type: Number,
        required: true
    },
    numberSeats: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("drivers", driverSchema);
