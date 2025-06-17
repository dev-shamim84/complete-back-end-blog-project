import { LoginrService, RegisterService } from "../service/UserService.js"

export const Register = async(req,res)=>{
   const {name,email,password} = req.body
   let result = await RegisterService(name,email,password)
   return res.status(201).json(result)
}
export const Login = async(req,res)=>{
   const {email,password} = req.body
   let result = await LoginrService(email,password)
   if(result.status === "Success") {
      const cookieOptions = {
         httpOnly: true,
         secure: true,          
         sameSite: "None",      
         expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
   }
      res.cookie("token",result.token,cookieOptions)
      return res.status(201).json(result)
   }else {
       return res.status(200).json(result)
   }
}
export const Logout = async(req,res)=>{
    const cookieOptions = {
      httpOnly:true ,
      secure: true,          
      sameSite: "None",
      expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
   }
    res.cookie("token","",cookieOptions)
    return res.status(200).json({ status: "success",messege:"UserLogout Success" });
}