import { getAllBlogs } from "@/prisma/blogs";
import BlogsPage from "./blogs";
import Hero from "@/components/Hero";

const HomePage = ({ blogs,latestPost,featuredPost }) => {
  return (
    <div className="container mx-auto">
      <Hero blog={latestPost} featured={featuredPost}/>
      <BlogsPage blogs={blogs} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const blogs = await getAllBlogs();
  const getBlogs = blogs.map((blog) => ( {
    ...blog,
    createdAt: blog.createdAt.toString(),
    updatedAt: blog.updatedAt.toString(),
  }));
  const sortBlog = blogs.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const latestBlogPost = {
    ...sortBlog[0],
    createdAt: sortBlog[0].createdAt.toString(),
    updatedAt: sortBlog[0].updatedAt.toString(),
  };
  const featuredBlogPosts = sortBlog.slice(1, 5).map((blog) => ({
    ...blog,
    createdAt: blog.createdAt.toString(),
    updatedAt: blog.updatedAt.toString(),
  }));
  return {
    props: {
      blogs: getBlogs,
      latestPost: latestBlogPost,
      featuredPost: featuredBlogPosts,
    },
  };
};
