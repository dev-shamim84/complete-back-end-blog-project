import mongoose from "mongoose"
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import "dotenv/config"
import { MONGO_URI, PORT } from "./src/config/config.js"
import { EXPIRE_NUMBER, MAX_JSON_SIZE, REQUEST_TIME, URL_ENCODE, WEB_CACHE } from "./src/config/config.js";
import router from "./src/routes/api.js";
const app = express()
// defult middware 
app.use(cors())
app.use(helmet())
// bodyparser
app.use(express.json({limit:MAX_JSON_SIZE}))
app.use(express.urlencoded({extended:URL_ENCODE}))
const limiter = rateLimit({
   windowMs:REQUEST_TIME,
   max:EXPIRE_NUMBER
})
app.use(limiter)
// database 
mongoose.connect(MONGO_URI).then(()=>{
   console.log("DATABASE CONNECTED");
   app.listen(PORT,()=>{
     console.log("SERVER RUN SUCCESSFULLY IN PORT",`${PORT}`)
   });
}).catch((error)=>{
   console.log("DATABASE NOT CONNECTED",error)
});
app.set("etag",WEB_CACHE)
// router 
app.use("/api/v1",router)

