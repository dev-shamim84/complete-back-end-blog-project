import jwt from "jsonwebtoken";
export const EncodeToken = (email,user_id) =>{
   const KEY = process.env.JWT_KEY
   const EXPIRE = {expiresIn:process.env.JWT_EXPIRE};
   const PAYLOAD = {email,user_id}
   return jwt.sign(PAYLOAD,KEY,EXPIRE)
}
export const DecodeToken = (token) => {
 try {
  const KEY = process.env.JWT_KEY
  return jwt.verify(token,KEY)
 }catch(e){
   return null
 } 
}