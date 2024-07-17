const cron = require('node-cron');
const Order = require('../models/Order');
const {sendEmail} = require('./emailService');

cron.schedule('0 0 * * *',async()=>{
    console.log('Running daily order status check');
    const pendingOrders = await Order.findAll({status:'pending', createdAt:{$lt: new Date(Date.now)-24*60*60*1000}});

    for(let order of pendingOrders){
        await sendEmail(
            order.customer.email,
            'order status remainder',
            `your order with id ${order.id} is still pending.please contact us if u have any question.`

        );
    }
});

module.exports = {initCronJobs:()=> console.log('cron jobs initialized')};