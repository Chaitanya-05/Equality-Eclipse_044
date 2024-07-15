const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');

//router.post("/", reviewController,createReview);
router.get('/book/:bookId', reviewController,reviewController.getBookReviews);

module.exports = router;