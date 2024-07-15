const Order = require('../models/Order');

exports.createOrder = async(req,res) =>{
    try{
        const {customerId, totalAmount,status} = req.body;
        const order = await Order.create({customerId,totalAmount,status});
        res.status(201).json({message:'order created successfully', orderId:order.id});
    }
    catch(err){
        res.status(500).json({message:'error occuring', error:err.message});
    }
};

exports.getCustomerOrders = async(req,res)=>{
    try{
        const orders = await Order.findAll({where:{customerId:req.params.customerId}});
        res.json(orders);
    }
    catch(err){
        res.status(500).json({message:'error occuring', error:err.message});
    }
};