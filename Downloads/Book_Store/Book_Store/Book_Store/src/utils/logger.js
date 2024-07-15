const winston = require('winston');
require('dotenv').config();
const {Writable}  = require('stream')

const logger = winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta:{service:'bookstore-service'},
    transports:[
        new winston.transports.File({filename:'error.log', level:'error'}),
        new winston.transport.File({filename:'combined.log'}),
    ],
});

if(process.env.NODE_ENV ! == 'production'){
      logger.add(new winston.transports.Console({
        format:winston.format.simple(),
      }));
}

class LogStream extends Writable{
    constructor(options){
        super(options);
    }
    _write(chunk,encoding,next){
        logger.info(chunk.toString());
        next();
    }
}

module.exports = {logger,LogStream};