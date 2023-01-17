const usersFn = require('./users')
const cars = require('./cars')
const bookings = require("./booking")
const drivers = require("./drivers")

module.exports = {
   users: usersFn,
   cars,
    bookings,
    drivers
}