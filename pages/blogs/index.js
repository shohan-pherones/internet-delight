import { getAllBlogs } from "@/prisma/blogs";
import Blog from "@/components/Blog";
import { useRouter } from "next/router";

const BlogsPage = ({ blogs }) => {
	const router = useRouter();
	return (
		<div className="blogs container mx-auto">
			{router.asPath === "/blogs" ? (
				<div className="bg-black text-white border rounded-md flex items-center justify-center h-36 my-10">
					<h2 className="text-xl font-semibold uppercase">All Blogs</h2>
				</div>
			) : (
				<div className="blog-header py-5">
					<h2 className="text-xl font-semibold uppercase">Recent Article</h2>
				</div>
			)}
			<div className="blog-content flex flex-col gap-5">
				{blogs.length > 0 && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
			</div>
		</div>
	);
};

export default BlogsPage;

export const getServerSideProps = async () => {
	const blogs = await getAllBlogs();
	const getBlogs = blogs
		.sort((a, b) => new Date(b.createdAt - a.createdAt))
		.map((blog) => ({
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
