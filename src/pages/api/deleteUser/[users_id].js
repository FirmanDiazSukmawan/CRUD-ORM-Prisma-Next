import prisma from "@/lib/prisma";

export default async function get(req, res) {
  try {
    let users_id = Number(req.query.users_id);

    const result = await prisma.users.delete({
      where: {
        users_id: users_id,
      },
    });

    res.json({
      data: result,
      message: "Delete successfully",
      depth: null,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
}
