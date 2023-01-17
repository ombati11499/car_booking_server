const { Api } = require("../helper")
const BookingModel = require("../models/bookings")
module.exports = async (data, res)=>{
console.log(data)
if(data.action === 'newBooking'){
    let newBooking = new BookingModel(data)
   let savedBooking = await newBooking.save()
   console.log(savedBooking)
}
else if (data.action==="fetchBookings"){
    let bookings=await BookingModel.find()
    Api(bookings, res)

}
}