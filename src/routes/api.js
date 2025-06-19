import express from "express";
import { Blog, DeleteBlog, ReaAllBlog, ReadBlog, UpdateBlog } from "../controller/BlogController.js";
import { CommentController } from "../controller/CommentController.js";
import { Login, Logout, Register } from "../controller/UserController.js";
import { AuthVerification } from './../middleware/AuthVerification.js';
const router = express.Router()
// user 
router.post("/Register",Register)
router.post("/login",Login)
router.post("/logout",Logout)
// CURD 
router.post("/createblog",AuthVerification,Blog)
router.get("/readallblog",AuthVerification,ReaAllBlog)
router.get("/readblog/:blogID",AuthVerification,ReadBlog)
router.put("/update/:blogID",AuthVerification,UpdateBlog)
router.delete("/delete/:blogID",AuthVerification,DeleteBlog)

router.post("/comment",AuthVerification,CommentController)
export default router