const Review = require('../models/Review');
const Customer = require('../models/Customer');

exports.createReview = async(req,res) =>{
    try{
        const review = new Review(req.body);
        await review.save();
        res.status(201).json({message:'Review created successfully', reviewId:review._id});
    }
    catch(err){
        res.status(500).json({message:'error occuring', error:err.message});
    }
};

exports.getBookReviews = async(req,res)=>{
    try{
        const reviews = await Review.find({book:req.params.bookId}).populate('book', 'title author');

        const reviewWithCustomerDetails  = await Promise.all(reviews.map(async(review)=>{
            const customer = await Customer.findByPk(review.customer,{attributes:['id','name','email']});
            return{
                ...review.toObject(),
                customer:customer?customer.toJSON():null
            };
        }));
        res.json(reviewWithCustomerDetails);
    }
    catch(err){
        res.status(500).json({message:'error is occuring', error:err.message});
    }
};