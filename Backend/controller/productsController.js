
const productsModel = require("../model/products")
const cloudinary = require("../utils/cloudinary")
const uploadProduct = async(req,res)=>{
        const {imageProduct,nameProduct,price,rating,commend} = req.body
        try {
            if(!nameProduct || !price || !commend || !imageProduct || !rating) return res.status(400).json("All fields are required");

            if(imageProduct){
                 const uploadProductRes = await cloudinary.uploader.upload(imageProduct, {
                    upload_preset: "VirtuFit"
                 })
                createProduct = new productsModel({
                        imageProduct:uploadProductRes,
                        nameProduct,
                        price,
                        rating,
                        commend
                })
                await createProduct.save()
                res.status(200).json({
                    imageProduct:uploadProductRes,
                    nameProduct,
                    price,
                    rating,
                    commend,
                    idProduct:createProduct._id
                })
            }else {
                   res.status(400).json("Image is important. Please fill it")
            }
        }catch (err){
           console.log(err)
           res.status(500).send(err)
        }

        
}
const getAllProduct = async(req,res) => {
      try {
          const response = await productsModel.find()
          res.status(200).json(response)
      }catch(err){
        console.log(err)
        res.status(500).send(err)
      }
}
const deleteProduct = async(req,res) => {
   const {_id} = req.body
   try {
        await productsModel.findByIdAndDelete(_id)
        res.status(200).json("Đã xoá thành công")
   }catch(err){
       console.log(err)
       res.status(200).json(err)
   }
}
module.exports = {uploadProduct,getAllProduct,deleteProduct}