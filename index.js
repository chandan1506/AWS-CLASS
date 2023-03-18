const express=require("express")
const app=express()
app.use(express.json())


app.get("/home",(req,res)=>{
    res.send("welcome to the the server2")
})


app.listen(3000,()=>{
    console.log("server is listening on 3000")
})