import { getAllBlogs } from "@/prisma/blogs";
import BlogsPage from "./blogs";

const HomePage = ({ blogs }) => {
  return (
    <div>
      <BlogsPage blogs={blogs} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const blogs = await getAllBlogs();
  const getBlogs = blogs.map((blog) => ({
    ...blog,
    createdAt: blog.createdAt.toString(),
    updatedAt: blog.updatedAt.toString(),
  }));
  return {
    props: {
      blogs: getBlogs,
    },
  };
};
