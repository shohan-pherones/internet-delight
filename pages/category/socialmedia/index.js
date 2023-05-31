import SocialMedia from "@/components/SocialMedia";
import { getAllBlogs } from "@/prisma/blogs";
import React from "react";

const SocialMediaPage = ({ blogs }) => {
	return (
		<div className="blogs container mx-auto">
			<div className="bg-black text-white border rounded-md flex items-center justify-center h-36 my-10">
				<h4 className="text-xl font-semibold uppercase tracking-widest">
					<span className="text-sky-500 font-bold">#</span>Socialmedia
				</h4>
			</div>
			{blogs.map((blog) => (
				<SocialMedia blog={blog} key={blog.id} />
			))}
		</div>
	);
};

export default SocialMediaPage;

export const getServerSideProps = async () => {
	const blogs = await getAllBlogs();
	const filteredBlogs = blogs
		.sort((a, b) => new Date(b.createdAt - a.createdAt))
		.filter((blog) => blog.tags.includes("#socialmedia"))
		.map((blog) => ({
			...blog,
			createdAt: blog.createdAt.toString(),
			updatedAt: blog.updatedAt.toString(),
		}));
	return {
		props: {
			blogs: filteredBlogs,
		},
	};
};
