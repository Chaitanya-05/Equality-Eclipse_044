const express = require('express');
const router = express.Router();
const adminController = require('../controller')
const {authenticationToken,authorizeRole}  = require('../middleware/auth')

router.get('/exportOrder',authenticationToken,authorizeRole(['admin']),adminController.exportOrders);
router.get('/books', authenticationToken,authorizeRole(['admin']),adminController.getBooks);
router.post('/books',authenticationToken,authorizeRole(['admin']),adminController.addBook);
router.put('/books/:id', authenticationToken,authorizeRole(['admin']),adminController.updateBook);
router.delete('/books/:id', authenticationToken,authorizeRole(['admin']),adminController.deleteBook);
router.get('/analytics', authenticationToken,authorizeRole(['admin']),adminController.getAnalytics);

module.exports = router;