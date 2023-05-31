import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenuAlt2, HiMinusSm } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: session } = useSession();
	const router = useRouter();

	const handleWriteBlog = () => {
		if (session) {
			router.push("/blogs/create");
		} else {
			router.push("/user/login?destination=/blogs/create");
		}
		setIsOpen(!isOpen);
	};

	const links = [
		{ url: "/category/ai", text: "AI" },
		{ url: "/category/cybersecurity", text: "CyberSecurity" },
		{ url: "/category/cryptocurrencies", text: "CryptoCurrencies" },
		{ url: "/category/digitalmarketing", text: "DigitalMarketing" },
		{ url: "/category/gaming", text: "Gaming" },
		{ url: "/category/socialmedia", text: "SocialMedia" },
		{ url: "/category/technology", text: "Technology" },
		{ url: "/blogs", text: "All Blogs" },
	];

	return (
		<header className="bg-black text-white sticky top-0 z-10">
			<nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
				<div className="logo">
					<Link href="/" className="text-xs font-bold text-sky-500">
						Internet Delight
					</Link>
				</div>
				<div className="lg:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <RiCloseFill className="h-6 w-6" /> : <HiMenuAlt2 className="h-6 w-6" />}
					</button>
				</div>
				<ul className={`text-sm hidden lg:flex items-center gap-5 ${isOpen ? "hidden" : "flex"}`}>
					{links.map((link,i) => (
						<li key={i}>
							<Link
								href={link.url}
								className="hover:text-sky-500 transition duration-500 ease-in-out">
								{link.text}
							</Link>
						</li>
					))}
					<button
						onClick={handleWriteBlog}
						className="bg-white text-black border hover:border-sky-500 hover:bg-black hover:text-sky-500 rounded-full focus:outline-none transition duration-500 ease-in-out py-2 px-4">
						Write Blog
					</button>
				</ul>
			</nav>
			<ul className={`lg:hidden ${isOpen ? "border-t flex flex-col gap-2 p-4" : "hidden"}`}>
				{links.map((link,i) => (
					<li key={i}>
						<Link
							onClick={() => setIsOpen(!isOpen)}
							href={link.url}
							className="hover:text-sky-500 transition duration-500 ease-in-out">
							{link.text}
						</Link>
					</li>
				))}
				<button
					onClick={handleWriteBlog}
					className="w-full bg-white text-black border hover:border-sky-500 hover:bg-black hover:text-sky-500 rounded-lg focus:outline-none transition duration-500 ease-in-out py-2 px-4">
					Write Blog
				</button>
			</ul>
		</header>
	);
};

export default Navbar;
