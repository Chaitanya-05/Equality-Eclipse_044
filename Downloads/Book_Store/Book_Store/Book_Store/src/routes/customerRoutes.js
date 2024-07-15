const express = require('express');
const router = express.Router();
const customerController = require('../controller/costomerController');

router.post('/register', customerController.register);
router.post('/login',customerController.login);
router.get('/get',customerController.getCustomer);

module.exports = router;
