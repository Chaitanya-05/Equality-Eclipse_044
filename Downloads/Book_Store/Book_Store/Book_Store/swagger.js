const swaggerJsdoc = require('swagger-jsdoc');

const options={
    defination:{
        openapi:'3.0.0',
        info:{
            title:'Online Bookstore API',
            version: '1.0.0',
            description:'API for bookstore app.'
        },
        servers:[
            {
                url:'http://localhost:3000',
                description:'develoopement server'.
            },
        ],
    },
    apis:['./routes/.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports =swaggerSpec;