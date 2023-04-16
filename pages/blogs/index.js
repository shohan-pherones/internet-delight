import { getAllBlogs } from "@/prisma/blogs";
import Blog from "@/components/Blog";

const BlogsPage = ({ blogs }) => {
  return (
    <div className="blogs">
      <div className="container mx-auto">
        <div className="blog-header py-5">
          <h2 className="text-2xl">Latest Posts</h2>
        </div>
        <div className="blog-content flex flex-col gap-5">
          {blogs.length > 0 &&
            blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;

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
