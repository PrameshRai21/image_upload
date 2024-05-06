import { Router } from "express";
import { imageData, uploadImage } from "../controllers/image.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const imageRoute = Router()

imageRoute.route("/upload").post( upload.single("image"),uploadImage)
imageRoute.route("/imageData").get(imageData)

export { imageRoute }