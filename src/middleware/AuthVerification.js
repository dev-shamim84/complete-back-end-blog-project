import { DecodeToken } from "../utils/Token.js"
export const AuthVerification = (req,res,next) =>{
   const token = req.headers.token || req.cookies.token
   const decoded = DecodeToken(token)
  //  console.log(decoded)
 if(!decoded){
     return res.status(401).json({status:"falled",messege:"Unauthorized"})
  }
  const {email,user_id} = decoded
  req.headers.eamil = email;
  req.headers.user_id = user_id;
  next()
}