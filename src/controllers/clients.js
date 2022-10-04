const clientsModel = require('../models/clients')

async function get (req, res) {
    const { id } = req.params

    const obj = id ? { _id, id } : null

    const client = await clientsModel.find(obj)
    res.send(client)
}


module.exports = {
    get
}