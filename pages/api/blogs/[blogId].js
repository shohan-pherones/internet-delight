import { getABlog } from "@/prisma/blogs";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const blog = await getABlog(req.query.blogId);
      return res.status(200).json(blog);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
