const ordersModel = require('../models/orders')

async function get (req, res) {
    const { id } = req.params

    const obj = id ? { _id, id } : null

    const orders = await ordersModel.find(obj)
    res.send(orders)
}


module.exports = {
    get
}