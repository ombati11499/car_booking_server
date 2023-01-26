const Mongoose = require("mongoose");
const { Api, saveImage } = require("../helper");
const DriverModel = require("../models/drivers");
module.exports = async (data, res) => {



  switch (data.action) {
    case "newDriver":
      let imageUrls = []
      for (let index = 0; index < data.uploadImages.length; index++) {
        let imageUrl = saveImage({
          folder: 'cars',
          base64Data: data.uploadImages[index],
          userId: data.userId
        })
        imageUrls = [...imageUrls, imageUrl]
        if (index === data.uploadImages.length - 1) {
          let newDriver = new DriverModel(Object.assign(data, { car: Object.assign(data.car, { images: imageUrls }) }));
          let result = await newDriver.save(); //saving new driver
          Api(result, res); //return response to front end
        }
      }


      break;
    case 'getCars':
      let cars = await DriverModel.find({}, { car: 1, dailyRate: 1 })
      console.log(cars)
      cars = cars.map(a => ({
        ...a.car,
        dailyRate: a.dailyRate,
        _id:a._id
      }))
      console.log(cars)
      
      Api(cars, res)
      break;

    case 'getCarInfo':
      let car = await DriverModel.findOne({
        _id: Mongoose.Types.ObjectId(data._id)
      }, { __v: 0 })
      Api(car, res)
      break;

    default:
      break;
  }


};
