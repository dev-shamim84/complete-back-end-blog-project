import { EncodeToken } from '../utils/Token.js';
import UserModel from './../model/UserModel.js';
import bcrypt from 'bcrypt'
export const RegisterService = async(name,email,password)=>{
   try {
     if(!email || !password) {
       const error = new Error("Email and Password are required")
       error.StatusCode = 400
       throw error
      }
     const existingUser  = await UserModel.findOne({email})
      if(existingUser) {
       const error = new Error("You are alarady registered please go to next step")
       error.StatusCode = 400
       throw error
      }
      const hashPassword = await bcrypt.hash(password,10)
      await UserModel.create({name,email,password:hashPassword})
      return {status:"Success",messege:"Register Successfully!"}
   }catch(error) {
     console.log(error)
    return { status: "Fail", statusCode: error.StatusCode || 500, message: error.message };
   }
}

export const LoginrService = async(email,password)=>{
   try {
    const user = await UserModel.findOne({email})
     if(!user) {
       const error = new Error("User is Not Found!")
       error.StatusCode = 400
       throw error
      }
      const match = await bcrypt.compare(password,user.password)
      if(!match){
       const error = new Error("User is Not Found!")
       error.StatusCode = 400
       throw error
      }
      const token = EncodeToken(user.email,user._id)
      // console.log(token)
      return {status:"Success",messege:"Login Successfully!",token}
   }catch(error) {
    console.log(error)
    return { status: "Fail", statusCode: error.StatusCode || 500, message: error.message };
   }
}