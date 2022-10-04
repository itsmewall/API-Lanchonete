const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    product: String,
    date: Number,

})

const Model = mongoose.model('orders', schema)

module.exports = Model