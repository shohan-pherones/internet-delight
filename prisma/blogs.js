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

// CREATE A NEW BLOG
export const createBlog = async (data) => {
  const blog = await prisma.blog.create({
    data,
  });

  return blog;
};

// UPDATE A BLOG
export const updateBlog = async (id, data) => {
  const blog = await prisma.blog.update({
    where: { id },
    data,
  });

  return blog;
};

// DELETE A BLOG
export const deleteBlog = async (id) => {
  const existingBlog = await prisma.blog.findUnique({
    where: { id },
  });

  if (!existingBlog) {
    throw new Error("Blog not found");
  }

  const deletedBlog = await prisma.blog.delete({
    where: { id },
  });

  return deletedBlog;
};
