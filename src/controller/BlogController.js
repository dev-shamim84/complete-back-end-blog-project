// Blog controller 
import { CreateBlogService, DeleteBlogService, ReadAllBlogService, ReadBlogService, UpdateBlogService } from './../service/BlogService.js';
export const Blog = async(req,res) =>{
   const result = await CreateBlogService(req)
   return res.status(201).json(result)
}
export const ReaAllBlog = async(req,res)=>{
   const result = await ReadAllBlogService(req)
   return res.status(200).json(result)
}
export const ReadBlog = async(req,res)=>{
   const result = await ReadBlogService(req)
   return res.status(200).json(result)
}
export const UpdateBlog = async(req,res)=>{
   const result = await UpdateBlogService(req)
   return res.status(200).json(result)
}
export const DeleteBlog = async(req,res)=>{
   const result = await DeleteBlogService(req)
   return res.status(200).json(result)
}


// read blog=
// export const ReadBlog = async(req,res)=>{
//    const result = await ReadBlogService(req)
//    return res.status(200).json(result)
// }
