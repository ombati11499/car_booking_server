const { Api } = require('../helper')
const UserModel = require('../models/users')
const bcrypt = require('bcrypt');

const usersFn = async (data, res) => {
    console.log(data)
    if (data.action === 'Signup') {
        //create a new user
        let user = await UserModel.findOne({ email: data.email })
        if (user) {
            Api({ status: "error", message: "This email is already registered." }, res)
        }
        else {
            let newUser = new UserModel()
            newUser.email = data.email
            newUser.password = data.password
            newUser.name = data.name
            //save user
            newUser.save((err, user) => {
                if (err)
                    throw err
                else
                    Api({ status: "success", message: "You have been signed up.", user }, res)
            })
        }

    }
    else if (data.action === 'login') {
       

        let user = await UserModel.findOne({ email: data.email }, { email: 1, password: 1 })
        const match = !user?false: await bcrypt.compare(data.password, user.password);
        // console.log(user.comparePassword(data.password))
        if (user === null || !match)
            Api({ status: "error", message: "You have entered wrong email or password." }, res)
        else {
            Api({ status: 'success', user }, res)
        }

    }
    else if (data.action === 'makeUserOperator') {
        UserModel.updateOne({ email: data.email }, { $set: { role: 'operator' } }, (err, resp) => {
            if (err)
                throw err
            else {
                console.log(resp)
                Api({ status: 'success', message: "User has been updated." }, res)
            }
        })
    }


}

module.exports = usersFn