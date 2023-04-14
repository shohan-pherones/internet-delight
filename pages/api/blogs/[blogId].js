import { deleteBlog, getABlog, updateBlog } from "@/prisma/blogs";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const blog = await getABlog(req.query.blogId);
      return res.status(200).json(blog);
    } else if (req.method === "PATCH") {
      const { blogId, data } = req.body;
      const updatedBlog = await updateBlog(blogId, data);
      return res.status(200).json(updatedBlog);
    } else if (req.method === "DELETE") {
      const { blogId } = req.body;
      const deletedBlog = await deleteBlog(blogId);
      return res.status(200).json(deletedBlog);
    } else {
      return res.status(400).json({ message: "Invalid request method" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
