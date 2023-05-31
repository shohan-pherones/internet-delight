import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const AI = ({blog}) => {
  return (
    <div className="border-b border-gray-200 grid grid-cols-12 gap-5 lg:gap-20 pb-5">
			<div className="flex flex-col col-span-8 row-span-full gap-5">
				<div className="flex justify-start">
					<div className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
						<Image
							src={blog.authorImage}
							alt={blog.authorName}
							width={40}
							height={40}
							className="rounded-full w-auto h-auto"
						/>
						<div className="flex items-center gap-5">
							<Link href={`/profile/`} className="font-bold text-gray-900 hover:underline">
								{blog.authorName}
							</Link>
							<span className="font-medium text-gray-600">
								{format(new Date(blog.createdAt), "MMMM dd, yyyy")}
							</span>
						</div>
					</div>
				</div>
				<Link href={`/blogs/${blog.id}`}>
					<h1 className="text-xl lg:text-4xl font-semibold hover:underline">{blog.title}</h1>
				</Link>
				<p className="line-clamp-2 lg:line-clamp-3">{blog.body}</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						{blog.tags
							?.split(", ")
							.filter((tag) => tag === "#ai")
							.map((tag, i) => (
								<Link
									key={i}
									href={`/category/${tag.slice(1)}`}
									className="text-sky-500 hover:underline">
									{tag}
								</Link>
							))}
					</div>
					<div className="text-xl text-gray-500 hover:text-sky-500 transition">
						<button>
							<MdOutlineBookmarkAdd />
						</button>
					</div>
				</div>
			</div>
			<div className="col-span-4 flex items-center justify-end">
				<Image
					priority
					src={blog.cover}
					alt={blog.title}
					width={400}
					height={400}
					className="w-auto h-auto"
				/>
			</div>
		</div>
  )
}

export default AI