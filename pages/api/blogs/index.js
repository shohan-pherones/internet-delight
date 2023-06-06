import { createBlog, getAllBlogs } from "@/prisma/blogs";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const blogs = await getAllBlogs();
      return res.status(200).json(blogs);
    } else if (req.method === "POST") {
      const newBlogData = req.body;
      console.log(newBlogData);
      const newBlog = await createBlog(newBlogData);
      return res.status(201).json(newBlog);
    } else {
      return res.status(400).json({ message: "Invalid request method" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
