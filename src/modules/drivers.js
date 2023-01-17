const { Api, saveImage } = require("../helper");
const DriverModel = require("../models/drivers");
module.exports = async (data, res) => {
  if (data.action === "newDriver") {
    console.log(data)

    let savedImageUrl = saveImage({
      folder: 'cars',
      base64Data: data.carImage,
      userId: data.userId
    })
    data.car.image = savedImageUrl
    let newDriver = new DriverModel(data);
    let result = await newDriver.save(); //saving new driver
    console.log(result)
    //   res.status(201).json(result) // returns response to front end
    Api(result, res); //return response to front end
  }
  else if (data.action === 'getCars') {
    let cars = await DriverModel.find({}, { car: 1 })
    cars = cars.map(a => a.car)
    Api(cars, res)
  }
};
