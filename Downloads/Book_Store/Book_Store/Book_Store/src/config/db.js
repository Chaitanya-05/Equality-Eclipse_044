const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.mysql_db,
    process.env.mysql_name,
    process.env.mysql_password,
    {
    host:process.env.mysql_host,
    dialect:'mysql'
});


const testConnection = async()=>{
    try{
        await sequelize.authenticate();
        console.log('Mysql has been connected successfully');
    }
    catch(err){
        console.err('Not able to connect to the Mysql db',err);
    }
};

testConnection();
module.exports = sequelize;