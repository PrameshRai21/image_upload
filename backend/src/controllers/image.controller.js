import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { Image } from "../models/image.model.js";

const uploadImage = asyncHandler(async (req, res) => {
        const {title} = req.body;
        if(!title){
            return res.status(400).json("Title cannot be empty!!!")
        }

        const imageLocalPath = req.file?.path
        console.log(imageLocalPath);
        if(!imageLocalPath){
            return res.status(400).json("No Image found.")
        }

        const imageUpload = await uploadOnCloudinary(imageLocalPath)

        const image = await Image.create({
            title: title,
            image: imageUpload.secure_url
        })
        
        return res.status(200).json(image)
})

//get image data
const imageData = asyncHandler(async(req, res) => {
    const imgData = await Image.find()
    return res.status(200).json(imgData)
})

export { uploadImage, imageData }