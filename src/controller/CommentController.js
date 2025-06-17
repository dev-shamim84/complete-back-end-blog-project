import { CommentService } from "../service/CommentService.js"
export const CommentController = async (req,res)=>{
   let result = await CommentService(req)
   return res.status(201).json(result)
}