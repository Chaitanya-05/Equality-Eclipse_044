const Order = require('../models/Order');
const bookstoreEvents = require('../utils/eventEmitter');
const {sendEmail} = require('../utils/emailService');
const logger = require('../utils/logger');
const socketManager = require('../utils/socketManager');


exports.createOrder = async(req,res) =>{
    try{
        const {customerId, totalAmount,status} = req.body;
        const order = await Order.create({customerId,totalAmount,status});

        bookstoreEvents.emit('newOrder',order);

        const io = socketManager.getIO();
        io.emit('newOrder',{order:order.toJSON()}); 

        await sendEmail(
            order.customer.email,
            'order confirmation',
            `your order with id ${order.id} has been received and is being processed`
        );
        logger.info(`new order created with id: ${order.id}`);
        res.status(201).json({message:'order created successfully', orderId:order.id});
    }
    catch(err){
        logger.err(`error occuring order:${err.message}`);
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