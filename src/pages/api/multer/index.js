import cloudinary from "@/config/cloudinaryConfig";

const multer = require("multer");
// const path = require("path");

// simpan file

const multerUpload = multer({
  storage: multer.diskStorage({}),

  fileFilter: (req, file, cb) => {
    // const ext = path.extname(file.originalname);
    const fileSize = parseInt(req.headers["content-length"]);
    const maxSize = 2 * 1024 * 1024;
    if (fileSize > maxSize) {
      const error = {
        message: "File size exceeds maximum image",
      };
      return cb(error, false);
    }
    // console.log(file);
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      const error = {
        message: "file must be a .png .jpg or .jpeg",
      };
      cb(error, false);
    }
  },
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

async function POST(req, res) {
  try {
    await runMiddleware(req, res, multerUpload.single("image"));
    const image = await cloudinary.uploader.upload(req.file.path);

    console.log(req.file.path);
  } catch (err) {
    console.log(err.message);
  }
  return res.json({ message: "image upload!" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default POST;
