import prisma from "@/lib/prisma";
import cloudinary from "@/config/cloudinaryConfig";

export default async function put(req, res) {
  try {
    const users_id = Number(req.query.users_id);

    const userImage = await cloudinary.v2.uploader.upload("public/pptest.jpg", {
      folder: "user",
    });

    const result = await prisma.users.findUnique({
      where: {
        users_id: users_id,
      },
    });

    if (!result) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const data = await prisma.users.update({
      where: {
        users_id: users_id,
      },
      data: {
        username: req.body.username || result.username,
        phone_number: req.body.phone_number || result.phone_number,
        image: userImage.secure_url || null,
      },
    });

    res.status(200).json({
      message: "Update Successful",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error update",
      error: error.message,
    });
  }
}
