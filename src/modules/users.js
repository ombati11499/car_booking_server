const { Api } = require('../helper')
const UserModel = require('../models/users')
const usersFn = (data, res) => {
    console.log(data)
    if (data.action === 'Signup') {
        //create a new user
        let newUser = new UserModel()
        newUser.email = data.email
        newUser.password = data.password
        newUser.name = data.name

        //save user
        newUser.save((err, resp) => {
            if (err)
                throw err
            else
                console.log(resp)
        })
    }
    else if (data.action === 'login') {
        UserModel.findOne({ email: data.email }, {}, (err, resp) => {
            if (err)
                throw err
            else {
                if (resp === null)
                    Api({
                        status: "error",
                        message: "You have entered wrong email or password."
                    }, res)
            }
        })
    }
    else if (data.action === 'makeUserOperator') {
        console.log("Make user an operator")
        UserModel.updateOne({ email: data.email }, { $set: { role: 'operator' } }, (err, resp) => {
            if (err)
                throw err
            else {
                console.log(resp)
                Api({status:'success', message:"User has been updated."}, res)
            }
        })
    }


}

module.exports = usersFn