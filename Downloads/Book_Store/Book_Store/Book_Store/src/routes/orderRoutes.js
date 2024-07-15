const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const {jwtToken, authorizeRole}  = require('../middleware/auth');

router.post('/',jwtToken, orderController.createOrder);
router.get('/customer/:customerId',jwtToken,authorizeRole(['admin','customer']),orderController.getCustomerOrders);

module.exports = router;