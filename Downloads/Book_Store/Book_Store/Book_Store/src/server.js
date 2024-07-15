const express = require('express');
const app = express();
require('dotenv').config();
const socketIo  = require('socket.io');
const bookstoreEvents = require('./utils/eventEmitter');
const port = process.env.PORT || 3030;
const sequelize = require('./config/db');
const customerRoutes = require('./routes/orderRoutes');
 const orderRoutes = require('./routes/orderRoutes');
 const bookRoutes = require('./routes/bookRoutes');
 const reviewRoutes = require('./routes/reviewRoutes');
 const swaggerSpec = require('../swagger');
const connectMongo = require('./config/mongodb');
const Order = require('./models/Order');
const {initCronJobs} = require('./utils/cronJobs');
const adminRoutes = require('./routes/adminRoutes');
const socketManager = require('./utils/socketManager');
const morgan = require('morgan');
const {LogStream} = require('./utils/logger');
const server = http.createServer(app);
const io = socketIo(server);
socketManager.init(io);

io.on('connection',(socket)=>{
    console.log('New client connected');

    const cleanupLogStream = socketManager.streamLogs(socket);

    socket.on('disconnect',()=>{
        console.log('client disconnected');
        cleanupLogStream();
    })
})

 bookstoreEvents.on('newOrder',(Order)=>{
    io.emit('notification',{message:`new order receivedwith id: ${order.id}`});
 });


app.use(express.json());

initCronJobs();

app.use('/api/admin', adminRoutes);

app.use(express.static('public'));

app.use(morgan('combined', {stream:new LogStream()}));

sequelize.sync().then(()=> console.log('mysql db synced'))
 app.use('/api/customers',customerRoutes);
 app.use('/api/orders', orderRoutes);
 app.use('/api/reviews', reviewRoutes);
 app.use('/api/books', bookRoutes)
 app.get('/',(req,res)=>{
     res.send('This is Book store');
 })
//  app.use('/api/customers', customerRoutes),
//  app.use('/api/orders', orderRoutes)
//  app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec));



app.listen(port, async()=>{
    await connectMongo();
    console.log(`Server is running on port no. ${port}`)
});

//module.exports = app;