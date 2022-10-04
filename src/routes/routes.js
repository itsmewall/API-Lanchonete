const router = require('express').Router()

const orderController = require ('../controllers/orders')

router.get('/orders/:id?', orderController.get)



module.exports = router