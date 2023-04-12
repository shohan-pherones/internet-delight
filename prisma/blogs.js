import prisma from "./prisma";

// GET ALL BLOGS
export const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({});
  return blogs;
};

// GET A SINGLE BLOG
export const getABlog = async (id) => {
  const blog = await prisma.blog.findUnique({
    where: { id },
  });
  return blog;
};
