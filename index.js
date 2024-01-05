const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("hello Project")
})
app.listen(9000 ,()=>{
    console.log("running");
})