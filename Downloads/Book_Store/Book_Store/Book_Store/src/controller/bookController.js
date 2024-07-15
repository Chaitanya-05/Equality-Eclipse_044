const Book = require('../models/Book');
exports.createBook = async(req,res) =>{
    try{
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({message:'book created successfully', bookId: book._id});

    }
    catch(err){
        res.status(500).json({message:'error occuring', error: err.message});
    }
};
exports.getAllBooks = async(req,res)=>{
    try{
        const {page=1,limit=10, sort, title,author} = req.query;
        const query={};
        if(title) query.title = new RegExp(title,'i');
        if(author) query.author = new RegExp(author,'i');
        const books = await Book.paginate(query);
        res.json(books);
    }
    catch(err){
        res.status(500).json({message:'error occuing', error:err.message});
    }
}

exports.getBook = async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({message:'book not found'});
                }
                res.json(book);        
    }
    catch(err){
        res.status(500).json({message:'error occuring', error:err.message});
    }
};

exports.updateBook = async (req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!book){
            return res.status(404).json({message:'book not found'});
        }
        res.json({messaget:'book updated successfully', book});
    }
    catch(err){
        res.status(500).json({message:'error updating book', error: err.message});
    }
}

exports.deleteBook = async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message:'book not found'});
        }
        res.json({message:'book deleted successfully'});
    }
    catch(err){
        res.status(500).json({message:'error deleting book', error : err.message});
    }
};