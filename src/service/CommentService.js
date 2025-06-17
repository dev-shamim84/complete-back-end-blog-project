import CommentModel from "../model/CommentModel.js";
export const CommentService = async (req)=>{
  try {
      let user_id = req.headers.user_id;
      let reqBody = req.body;
      reqBody.userID = user_id
      const data = await CommentModel.create(reqBody)
      return {status:true,data:data}
  }catch(error){
     console.log(error)
     return {status:false,err:error.messege.toString()}
  }
}