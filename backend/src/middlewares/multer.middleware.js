import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const suffix = Date.now();
      cb(null, suffix + file.originalname)
    }
  })
  
export const upload = multer({ storage })