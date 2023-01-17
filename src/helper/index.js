const fs = require('fs')

const Api = (data, res) => {
    res.status(201).json(data)
},
    saveImage = ({ folder, base64Data, userId }) => {
        let buff = Buffer.from(base64Data, 'base64')
        let imgUrl = `/${folder}/${(userId || 'vendor') + '_' + Date.now()}.png`
        console.log({ imgUrl })
        fs.writeFileSync('public' + imgUrl, buff)
        let host = 'http://192.168.100.198:3001'
        return `${host}${imgUrl}`
    }

module.exports = {
    Api,
    saveImage
}