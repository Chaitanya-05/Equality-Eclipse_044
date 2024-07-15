const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const {jwtToken,authorizeRole} = require('../middleware/auth');

router.post('/', jwtToken,authorizeRole(['admin']),bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', jwtToken,authorizeRole(['admin']),bookController.getBook);
router.put('/:id', jwtToken,authorizeRole(['admin']),bookController.deleteBook);

module.exports = router;