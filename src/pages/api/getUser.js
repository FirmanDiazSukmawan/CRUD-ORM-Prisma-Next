import prisma from "@/lib/prisma";

export default async function get(req, res) {
  try {
    let search = req.query.search || "";
    let sort = req.query.sort || "asc";

    const result = await prisma.users.findMany({
      where: {
        username: {
          contains: search,
        },
      },
      orderBy: {
        username: sort,
      },
    });

    res.json({
      data: result,
      message: "get data successfully",
      depth: null,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
}
