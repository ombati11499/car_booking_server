const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: 'white'
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        userId: mongoose.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = mongoose.model("cars", carSchema);
