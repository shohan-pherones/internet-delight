import CryptoCurrencies from "@/components/CryptoCurrencies";
import { getAllBlogs } from "@/prisma/blogs";
import React from "react";

const CryptoCurrenciesPage = ({ blogs }) => {
	return (
		<div className="blogs container mx-auto">
			<div className="bg-black text-white border rounded-md flex items-center justify-center h-36 my-10">
				<h4 className="text-xl font-semibold uppercase tracking-widest">
					<span className="text-sky-500 font-bold">#</span>cryptocurrencies
				</h4>
			</div>
			{blogs.map((blog) => (
				<CryptoCurrencies blog={blog} key={blog.id} />
			))}
		</div>
	);
};

export default CryptoCurrenciesPage;

export const getServerSideProps = async () => {
	const blogs = await getAllBlogs();
	const filteredBlogs = blogs
		.sort((a, b) => new Date(b.createdAt - a.createdAt))
		.filter((blog) => blog.tags.includes("#cryptocurrencies"))
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
