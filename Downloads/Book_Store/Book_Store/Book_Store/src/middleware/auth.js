const jwt = require('jsonwebtoken');

const jwtToken = (req,res,next)=>{
    const authHeadr = req.header['authorization'];
    const token = authHeadr && authHeadr.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token,process.env.JWT_SECRET, (err,user)=>{
        if(err) return res.sendStatus(403);
        req.user= user;
        next();
    });
}
const authorizeRole =(roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.statuss(403).json({message:'access denied'});
        }
        next();
    }
}
module.exports = {jwtToken, authorizeRole};