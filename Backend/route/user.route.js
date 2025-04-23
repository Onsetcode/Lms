const express=require("express");

const userRoute=express.Router();

const user_controller=require("../controller/user.controller");

userRoute.post("/signup",user_controller.signup);
userRoute.post("/login",user_controller.login);
module.exports=userRoute;