import BlogModel from './../model/BlogModel.js';
import mongoose from 'mongoose';
//  ObjectId = mongoose.Types.ObjectId
export const CreateBlogService = async(req) =>{
   try {
     const user_id = req.headers.user_id
     let reqBody = req.body;
     reqBody.userID = user_id
     const data = await BlogModel.create(reqBody)
     return {status:true, messege:" Blog Created Successfully"}
   }catch(error){
    console.log(error)
     return {status:false,err:error.messege.toString()}
   }
}
export const ReadAllBlogService = async(req)=>{
  try {
     const user_id = req.headers.user_id
     const data = await BlogModel.find({userID:user_id})
     return {status:true, messege:"All Blog Fetched Successfully",data:data}
   }catch(error){
    console.log(error)
     return {status:false,err:error.messege.toString()}
   }
}
export const ReadBlogService = async(req)=>{
  try {
     const BlogID = req.params.blogID
     const user_id = req.headers.user_id
     const data = await BlogModel.findOne({userID:user_id,_id:BlogID})
     return {status:true,messege:"Blog Fetched Successfully", data:data}
   }catch(error){
    console.log(error)
     return {status:false,err:error.messege.toString()}
   }
}
export const UpdateBlogService = async(req)=>{
  try {
     const user_id = req.headers.user_id
     const BlogID = req.params.blogID
     const reqBody = req.body
     if(!user_id && !reqBody && !BlogID) {
       const error = new Error("You can not update!")
       error.StatusCode = 400
       throw error
     }
     const data = await BlogModel.updateOne(
      {userID:user_id,_id:BlogID},
      {$set:reqBody},
      {$upsert:false}
    )
     return {status:true,messege:"Blog updated Successfully"}
   }catch(error){
    console.log(error)
     return {status:false,err:error.messege.toString()}
   }
}
export const DeleteBlogService = async(req)=>{
  try {
     const user_id = req.headers.user_id
     const BlogID = req.params.blogID
     if(!BlogID) {
       const error = new Error("You can not delete!")
       error.StatusCode = 400
       throw error
     }
    const data = await BlogModel.deleteOne({userID:user_id,_id:BlogID})
     return {status:true,messege:"Blog blog delete Successfully"}
   }catch(error){
    console.log(error)
     return {status:false,err:error.messege.toString()}
   }
}

// export const ReadBlogService = async(req)=>{
//   try {
//    const BlogID = new ObjectId(req.params.blogID)
//    let user_id = req.headers.user_id
//    const matchingStage = {$match:{_id:BlogID,userID:user_id}};
//    const joinStage = {
//       $lookup:{
//           from:"comments",
//           localField:"_id",
//           foreignField:"blogID",
//           as:"comments"
//       }
//    }
//    const unwindComments = {$unwind:"$comments"}
//    const projectionStage = {$project:{"comments._id":0,blogID:0}}
//    const data = await BlogModel.aggregate([
//       matchingStage,
//       joinStage,
//       projectionStage,
//       unwindComments
//    ])
//    return {status:"Success",data:data}
//   }catch(error) {
//     console.log(error)
//     return {status:false,err:error.messege}
//   }
// }