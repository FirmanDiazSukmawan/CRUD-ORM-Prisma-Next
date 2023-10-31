const {
  readUser,
  createUser,
  updateUser,
  deleteUser,
  findById,
  loginUser,
  selectPagination,
  pagination,
  findUserEmail,
} = require("../../../model/userModel");
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export default async function post(req, res) {
  try {
    const { email, username, password, confirmPassword, phone_number, role } =
      req.body;

    let { rowCount } = await prisma.users.findMany({
      where: {
        email: email,
      },
    });
    if (rowCount) {
      return res
        .status(400)
        .json({ message: "email already in use,please use another email" });
    }
    if (password !== confirmPassword)
      return res
        .status(401)
        .json({ message: "passsword and confirm password do not match" });
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          message: "Error hashing password",
          error: err.message,
        });
      }

      const user = {
        email,
        username,
        password: hash,
        phone_number,
        role,
      };
      // console.log(user);

      try {
        const userData = await prisma.users.create({
          data: user,
        });
        // console.log("User data:", userData);
        res.status(200).json({
          message: "User has been created successfully",
          data: userData,
        });
      } catch (err) {
        console.error("Error creating user:", err);
        res.status(400).json({
          message: "Error creating user",
          err: err.message,
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      message: "Error creating user Catch",
      err: err.message,
    });
  }
}
