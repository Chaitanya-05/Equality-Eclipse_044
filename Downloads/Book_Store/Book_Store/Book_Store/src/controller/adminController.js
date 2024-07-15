const {Readable} = require('stream');
const csv = require('fast-csv');
const Order = require('../models/Order');
const Book = require('../models/Book')

exports.exportOrders = async(req,res)=>{
    try{
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=orders.csv');

        const cursor = Order.find().cursor();
        const transformStream = csv.format({headers:true});

        const readbleStream = new Readable({
            async read(){
                try{
                    const order = await cursor.next();
                    if(order){
                        this.push(order);
                    }
                    else{
                        this.push(null);
                    }
                }
                catch(err){
                    console.err('error reading order:', err);
                    this.push(null);
                }
            }
        });
        readbleStream.pipe(transformStream).pipe(res);
    }
    catch(err){
        res.status(500).json({message:'error exporting order', error:err.message});
    }
};


exports.getBooks = async(req,res)=>{
    try{
        const books = await Book.find();
        res.json(books);
    }
    catch(err){
        res.status(500).json({message:'error fetching books', error:err.message});
    }
}

exports.addBook = async(req,res)=>{
    try{
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    }
    catch(err){
        res.status(500).json({message:'error adding book',error:err.message});
    }
}

exports.updateBook = async (req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!book) return res.status(404).json({messaage:'Book not found'});
        res.json(book);
    }
    catch(err){
        res.status(500).json({message:'error updating book', error: err.messaage});
    }
}

exports.deleteBook = async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) return res.status(404).json({messaage:'Book not found'});
        res.json({message:'book deleted successfully'});
    }
    catch(error){
        res.status(500).json({message:'error deleting book',error:error.messaage});
    }
};

exports.getAnalytics=async(req,res)=>{
    try{
        const totalOrders = await Order.countDocuments();
        const totalRevenue = await Order.aggregate([
    {$group:{_id:null, total:{$sum:"$totalAmount"}}}
        ]);
        const highSellingBooks = await Order.aggregate([
            {$unwind:"$books"},
        {$group:{_id:"$books.bookId", count:{$sum:1}}},
        {$sort:{count:-1}},
        {$limit:5},
        {$lookup:{from:"books",localField:"_id", foreignField:"_id", as : "bookDetails"}}

        ]);
        res.json({
            totalOrders,
            totalRevenue:totalRevenue[0]?.total || 0,
            highSellingBooks
        });
    }
    catch(error){
        res.status(500).json({message:'error fetching analytics', error:error.messaage});
    }
}

