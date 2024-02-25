const express=require("express");
const { signUp, logIn,getUser } = require("../controller/userService");
const userRouter= express.Router();

userRouter.post("/signup",signUp);
userRouter.post("/login",logIn);
userRouter.get("/getuser/:userName",getUser);

module.exports={userRouter}