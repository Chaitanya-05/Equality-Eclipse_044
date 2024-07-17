const {Readable} = require('stream');
const fs = require('fs');

let io;

module.exports = {
    init : (socketIo)=>{
        io = socketIo;
        return io;
    },
    getIO : ()=>{
        if(!io){
            throw new Error('Socket.io not intialized');
        }
        return io;
    },
    streamLogs : (socket)=>{
        const LogStream = fs.createReadStream('combined.log',{encoding:'utf-8'});
        LogStream.on('data',(chunk)=>{
            socket.emit('log',chunk);
        });
        LogStream.on('error',(error)=>{
            console.error('Error reading log file:',error);
        });
        return ()=>{
            LogStream.destroy();
        }
    }
};