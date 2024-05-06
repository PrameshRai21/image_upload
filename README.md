Image upload on cloudinary using mern stack

#uploading image on specific folder
-------------------------------------------------
await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: "image_upload"
        }) 
