import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

const loginUser =async(req,res)=>{
  const {email,password}=req.body;
  try{
    const user=await userModel.findOne({email});
    if(!user){
      return res.status(400).json({message:"Invalid email or password"})
      }
      const isMatch=await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res.status(400).json({message:"Invalid email or password"})
        }
        const token =createToken(user._id);
          res.json({token})
          }catch(err){
            console.log(err);
            res.status(500).json({message:"Internal server error"})
        
  }

}

const createToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: "1h"
    })
}


const registerUser = async(req,res) =>{
  const {name,email,password}= req.body;
  try{
    const exist = await userModel.findOne({email});
    if(exist){
      return res.status(400).json({message:"User already exist"})
      }
      if(!validator.isEmail(email)){
        return res.status(400).json({message:"Invalid email"})
      }

      if(password.length<8){
        return res.status(400).json({message:"Password must be at least 8 characters long"})
      }

      const salt =await bcrypt.genSalt(10)
      const hashedPassword =await bcrypt.hash(password,salt);
      const user = new userModel({
        name:name,
        email:email,
        password:hashedPassword
        })
        await user.save()
        const token = createToken(user._id)
        res.status(201).json({message:"User created successfully",token})
  }
  catch(error){
    console.log(error);
    res.status(500).json({message:"Internal server error"})

  }
}

export {loginUser,registerUser}
