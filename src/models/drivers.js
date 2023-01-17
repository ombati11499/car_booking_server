const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // surname: {
    //     type: String,
    //     required: true
    // },
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
    car: {
        make: {
            type: String,
        },
        model: {
            type: String,
        },
        year: {
            type: Number,
        },
        color: {
            type: String,
            default: 'white'
        },
        numberSeats: {
            type: Number
        },
        image: { type: String }
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    dailyRate: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("drivers", driverSchema);
