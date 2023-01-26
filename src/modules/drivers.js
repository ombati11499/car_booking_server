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
        console.log(imageUrls)
      }


      break;
    case 'getCars':
      let cars = await DriverModel.find({}, { car: 1 })
      cars = cars.map(a => a.car)
      Api(cars, res)
      break;

    case 'getCarInfo':
      let car = await DriverModel.findOne({
        userId: Mongoose.Types.ObjectId(data.userId)
      }, { __v: 0 })
      Api(car, res)
      break;

    default:
      break;
  }


};
