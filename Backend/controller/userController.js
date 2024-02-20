const userModel = require("../model/user")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const createToken = (data) => {
    const jwtKey = process.env.JWT_SECRET_KEY
    return jwt.sign(data,jwtKey,{ expiresIn: "50s"})
}
const registerUser = async(req,res) => {
    const {name,email,password} = req.body
    try {
       let user = await userModel.findOne({email})
       if(user) return res.status(400).json("User with the riven email already exist ....")
       if(!name || !email || !password ) return res.status(400).json("All field are required")
       if(!validator.isEmail(email)) return res.status(400).json("Email must be is valid email")
       if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be strong password")
       user = new userModel({
               name,
               email,
               password,
               isAdmin:"False"
       })
       const salt = await bcrypt.genSalt(10)
       user.password = await bcrypt.hash(user.password,salt)
       await user.save()
       const data = {
              userId:user._id,
              isAdmin:user.isAdmin
       }
       const token = createToken(data)
       res.status(200).json({
         name,
         email,
         token
       }) 
    }catch(err){
       console.log(err)
       res.status(500).send(err)
    }
 }
 const loginUser = async(req,res) => {
       const {email,password} = req.body
       try {
        let user = await userModel.findOne({email})
        if(!user) return res.status(400).json("Invalid email or password")
        const isValidPassword = await bcrypt.compare(password,user.password)
        if(!isValidPassword) return res.status(400).json("Invalid email or password")
        const data = {
             _id:user._id,
             isAdmin:user.isAdmin
        }
        const token = createToken(data)
        res.status(200).json({
            name:user.name,
            email:user.email,
            avatar:user?.avatar,
            token
          }) 
       }catch(err){
          console.log(err)
          res.status(500).send(err)
       }
 }
 
 module.exports = {registerUser,loginUser}