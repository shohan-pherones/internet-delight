import { getABlog } from "@/prisma/blogs";
import { format } from "date-fns";

import Image from "next/image";

const Post = ({ blog }) => {
  return (
    <>
      <div id="post-container" className="w-11/12 mx-auto">
        <div id="post-hero-section">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:p-6">
            <div className="grid md:items-center md:pr-16 my-7  md:w-full">
              <small>
                <b>{format(new Date(blog.createdAt), "MMMM dd, yyyy")}</b>
                <h1 className="md:text-3xl md:font-bold">{blog.title}</h1>
                <p className="text-gray-500 my-7">{blog.body}</p>
                <div
                  id="port-author"
                  className="grid grid-cols-[50px_1fr] my-5 gap-5"
                >
                  <div>
                    <Image
                      priority
                      src={blog.authorImage}
                      alt={blog.authorName}
                      width={40}
                      height={40}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div>
                    <strong>{blog.authorName}</strong>
                    <br />
                    <span className="text-gray-500">
                      {blog.authorDesignation}
                    </span>
                  </div>
                </div>
              </small>
            </div>
            <div>
              <Image
                priority
                src={blog.cover}
                alt={blog.title}
                width={800}
                height={800}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
        <div id="post-content-section" className="md:w-3/6 md:mx-auto py-8">
          <p className="first-letter:text-7xl first-letter:font-semibold first-letter:mr-3 first-letter:float-left">
            {blog.fullBody}
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;

export const getServerSideProps = async ({ query }) => {
  const blog = await getABlog(query.blogId);

  const updatedBlog = {
    ...blog,
    updatedAt: blog.updatedAt.toString(),
    createdAt: blog.createdAt.toString(),
  };

  return {
    props: {
      blog: updatedBlog,
    },
  };
};
