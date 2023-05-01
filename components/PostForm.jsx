import { useRouter } from "next/router";
import React, { useState } from "react";

const PostForm = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [cover, setCover] = useState("");
	const [authorImage, setAuthorImage] = useState("");
	const [authorName, setAuthorName] = useState("");
	const [tags, setTags] = useState("");

	const router = useRouter();


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const bodyObj = { title, body, cover, authorImage, authorName, tags };
			await fetch(`/api/blogs`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(bodyObj),
			});
			await router.push("/blogs");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
			<div className="form-control flex flex-col gap-3">
				<label htmlFor="title">Post Title</label>
				<input
					className="outline-none bg-white border-[1px] border-gray-300 hover:border-black focus:border-blue-700 focus:border-1 rounded py-3 px-4 w-full"
					type="text"
					id="title"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="form-control flex flex-col gap-3">
				<label htmlFor="title">Post Body</label>
				<textarea
					className="outline-none bg-white border-[1px] border-gray-300 hover:border-black focus:border-blue-700 focus:border-1 rounded py-3 px-4 w-full"
					cols={50}
					rows={8}
					type="text"
					id="title"
					placeholder="Content"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
			</div>
			<div className="form-control flex flex-col gap-3">
				<label htmlFor="cover">Cover Image</label>
				<input
					className="outline-none bg-white border-[1px] border-gray-300 hover:border-black focus:border-blue-700 focus:border-1 rounded py-3 px-4 w-full"
					type="text"
					id="cover"
					placeholder="Paste Image Url"
					onChange={(e) => setCover(e.target.value)}
				/>
			</div>
			<div className="form-control flex flex-col gap-3">
				<label htmlFor="author_name">Author Name</label>
				<input
					className="outline-none bg-white border-[1px] border-gray-300 hover:border-black focus:border-blue-700 focus:border-1 rounded py-3 px-4 w-full"
					type="text"
					id="author_name"
					placeholder="Author Name"
					value={authorName}
					onChange={(e) => setAuthorName(e.target.value)}
				/>
			</div>
			<div className="form-control flex flex-col gap-3">
				<label htmlFor="author_image">Author Profile</label>
				<input
					className="outline-none bg-white border-[1px] border-gray-300 hover:border-black focus:border-blue-700 focus:border-1 rounded py-3 px-4 w-full"
					type="text"
					id="author_image"
					placeholder="Paste Author Profile Image Url"
					value={authorImage}
					onChange={(e) => setAuthorImage(e.target.value)}
				/>
			</div>
			<div className="form-control flex flex-col gap-3">
				<label htmlFor="title">Tags</label>
				<input
					className="outline-none bg-white border-[1px] border-gray-300 hover:border-black focus:border-blue-700 focus:border-1 rounded py-3 px-4 w-full"
					type="text"
					id="tags"
					placeholder="Multiple Tags"
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>
			</div>
			<button type="submit" className="py-3 px-6 bg-blue-700 text-white rounded">
				Save
			</button>
		</form>
	);
};

export default PostForm;
