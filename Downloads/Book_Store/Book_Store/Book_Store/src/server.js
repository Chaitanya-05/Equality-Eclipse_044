const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3030;
//const sequelize = require('./config/db');
const connectMongo = require('./config/mongodb');
//const customerRoutes = require('./routes/orderRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const bookRoutes = require('./routes/bookRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');
// const swaggerSpec = require('../swagger');

 


app.use(express.json());

//sequelize.sync().then(()=> console.log('mysql db synced'));


// app.use('/api/customers',customerRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/reviews', reviewRoutes);
// app.use('/api/books', bookRoutes);

// app.get('/',(req,res)=>{
//     res.send('This is Book store');
// })

// app.use('/api/customers', customerRoutes);
// app.use('/api/orders', orderRoutes);

// app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec));



app.listen(port, async()=>{
    await connectMongo();
    console.log(`Server is running on port no. ${port}`)
});
// module.exports = app;