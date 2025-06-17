import mongoose from "mongoose";
const DataSchema = mongoose.Schema(
  {
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    image:{type:String,required:true},
    title:{type:String,required:true},
    des:{type:String,required:true},
  },
   {
     timeStamps:true,
     versionKey:false,
   }
)
const BlogModel = mongoose.model("blogs",DataSchema)
export default BlogModel