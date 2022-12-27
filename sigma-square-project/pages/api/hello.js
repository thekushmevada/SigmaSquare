// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../lib/connect"

connect();

export default async (req, res) => {
  res.json({test: 'test'});
}

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
