
const mongoose = require("mongoose")

const userDetailsSchema = new mongoose.Schema({

    name: {
        type: String

    },
    age: {
        type: String
    },
    images: {
        type: Array
    }
})

const UserDetails = mongoose.model('UserDetails', userDetailsSchema)
module.exports = { UserDetails }
