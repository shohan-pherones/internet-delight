import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
const Hero = ({ blog, featured }) => {
  return (
    <div className="hero-section pt-10">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-5">
        <div className="content-block md:col-span-8 flex flex-col gap-3">
          <div className="img w-full">
            <Image
              src={blog.cover}
              alt={blog.title}
              width={400}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="content-info flex flex-col gap-5 font-semibold py-2 px-6">
            <span className="post-cta">
              <Link
                href={`/category/${blog.tags?.split(",")[0].slice(1)}`}
                className="uppercase text-xs text-sky-500 font-semibold  tracking-[2px]"
              >
                {blog.tags?.split(",")[0].replace("#", "")}
              </Link>
            </span>
            <h2 className="post-title text-xl lg:text-4xl">{blog.title}</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs" href="/profile">
                {blog.authorName}
              </span>
              <span className="text-sm text-gray-600">
                {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
              </span>
            </div>
            <p className="font-normal">
              {blog.body}
            </p>
            <Link
              href={`blogs/${blog.id}`}
              className="text-sky-500 underline font-normal"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="featured-block border-b md:border-0 pb-5 md:col-span-4 flex flex-col gap-5">
          <h3 className="featured-title uppercase text-2xl pb-2 border-b">Featured</h3>
          {featured.map((blog) => (
            <div key={blog.id} className="featured-info flex flex-col gap-5">
              <span className="post-cta">
                <Link
                  href={`/tags/${blog.tags?.split(",")[0].slice(1)}`}
                  className="uppercase text-xs text-sky-500 font-semibold tracking-[2px]"
                >
                  {blog.tags?.split(",")[0].replace("#", "")}
                </Link>
              </span>
              <h2 className="post-title hover:underline text-xl lg:text-2xl line-clamp-3">
                <Link href={`blogs/${blog.id}`}>{blog.title}</Link>
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
