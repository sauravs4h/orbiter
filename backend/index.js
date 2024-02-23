const express= require("express");
const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"base api"})
})



app.listen(8080,()=>{
    try {

        console.log("running on port 8080")
        
    } catch (error) {
        console.log(error)
    }
})