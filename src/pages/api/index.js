// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default function handler(req, res) {
  const body = req.body;
  if (req.method === "POST") {
    res.status(405).send({
      message: "only POST requests are allowed",
    });
  }

  if (!body.email) {
    res.status(404).json({ message: "required email" });
  }

  if (!body.password) {
    res.status(404).json({ message: "required password" });
  }

  if (body.email === "test@gmail.com" && body.password === 123) {
    res.status(200).json({ message: "login successful" });
  } else {
    res.status(404).json({ message: "Wrong email or password" });
  }
}
