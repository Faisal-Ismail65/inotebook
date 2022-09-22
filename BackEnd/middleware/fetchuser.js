const jwt  = require('jsonwebtoken');
const JWT_SECRET = "fai544"
const fetchuser = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({error : "Please authenticate with valid token" });
    }else{
        try {
            const data = jwt.verify(token , JWT_SECRET);
            req.user = data.user
            next();
            
        } catch (error) {
            return res.status(401).send({error : "Some Error Occured"});   
        }
    }
}


module.exports = fetchuser;