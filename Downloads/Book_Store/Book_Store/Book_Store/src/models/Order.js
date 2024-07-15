const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./Customer');

const Order = sequelize.define('Order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    orderDate:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    totalAmount :{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    status:{
        type :DataTypes.ENUM('pending','processing','delivered'),
        defaultValue:'pending'
    }
});
Customer.hasMany(Order);
Order.belongsTo(Customer);
module.exports = Order;