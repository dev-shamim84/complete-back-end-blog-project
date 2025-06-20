import mongoose from "mongoose";
const DataSchema = mongoose.Schema(
  {
    name:{type:String,required:true,unique:true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
  },
  {
    timestamps:true,
    versionKey:false
  }
)
const UserModel = mongoose.model("users",DataSchema);
export default UserModel