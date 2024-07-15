const Customer = require('../models/Customer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const hashPassword = await bcrypt.hash(password,8);
        const customer = await Customer.create({name,email,password:hashPassword});
        res.status(201).json({message:"Customer registered successfully", customerId: customer.id});
    }
    catch(err){
        res.status(500).json({message: 'error occur', error:err.message})
    }
};

exports.login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const customer = await Customer.findOne({where:{email}});
        if(!customer){
            return res.status(401).json({message:'Invalid email or password please check'});
        }
        const isPasswordValid = await bcrypt.compare(password,customer.password);
        if(!isPasswordValid){
            return res.status(401).json({message:'Invalid email or password please check'});
        }
        const token = jwt.sign({id:customer.id, role:customer.role}, process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({message:'Login successful', token});
    }
    catch(err){
        res.status(500).json({message:'Error logging in', error:err.message});
    }
};

exports.getCustomer = async(req,res)=>{
    try{
        const customer = await Customer.findByPk(req.params.id,{attributes:{exclude:['password']}});
        if(!customer){
            return res.status(404).json({message:'customer not found'});
        }
        res.json(customer);
    }
    catch(err){
        res.status(500).json({message:'error occuring', error: err.message});
    }
};