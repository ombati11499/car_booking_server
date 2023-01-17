const { Api } = require("../helper");
const DriverModel = require("../models/drivers");
module.exports = async (data, res) => {
  console.log(data);
  if (data.action === "newDriver") {
    let newDriver = new DriverModel(data);
    let result = await newDriver.save(); //saving new driver
    //    console.log(result)
    //   res.status(201).json(result) // returns response to front end
    Api(result, res);
  }
};
