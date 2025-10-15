const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
const studentRoutes=require("./routes/StudentRoutes");
const express = require("express");
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Error connectingto MongoDB",err)
})

app.use("/student",studentRoutes);
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log("Server running on port",PORT));