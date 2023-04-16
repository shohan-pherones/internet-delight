import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { getAllBlogs } from "@/prisma/blogs";
import Image from "next/image";

const BlogsPage = ({ blogs }) => {
  return (
    <div className="blogs">
      <div className="container mx-auto">
        <div className="blog-header py-5">
          <h2 className="text-2xl">Latest Posts</h2>
        </div>
        <div className="blog-content">
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="border-b-2 border-gray-200 grid grid-cols-12 gap-5 lg:gap-20 pb-10"
              >
                <div className="flex flex-col col-span-8 row-span-full gap-5">
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                      <Image
                        src={blog.authorImage}
                        alt={blog.authorName}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex items-center gap-5">
                        <Link
                          href="/profile"
                          rel="author"
                          className="font-bold text-gray-900"
                        >
                          {blog.authorName}
                        </Link>
                        <span className="font-medium text-gray-600">
                          {blog.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href={blog.id}>
                    <h1 className="text-md lg:text-4xl font-semibold">
                      {blog.title}
                    </h1>
                  </Link>
                  <p className="line-clamp-2 lg:line-clamp-3">{blog.body}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <Link
                        href="/tags"
                        className="bg-gray-200 text-black rounded-full py-1 px-4"
                      >
                        {blog.tags.split(",").at(0)}
                      </Link>
                    </div>
                    <div className="text-xl text-gray-500 flex items-center gap-5">
                      <button>
                        <MdOutlineBookmarkAdd />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 flex items-center justify-end">
                  <Image
                    src={blog.cover}
                    alt={blog.title}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
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
