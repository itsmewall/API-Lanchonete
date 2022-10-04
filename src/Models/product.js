const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    price: Number,
    status: String,
})

const Model = mongoose.model('products', schema)

module.exports = Model