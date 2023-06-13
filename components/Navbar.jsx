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

  return (
    <header className="bg-black text-white sticky top-0 z-10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div className="logo">
          <span className="text-xs font-bold">Internet Delight</span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RiCloseFill className="h-6 w-6" />
            ) : (
              <HiMenuAlt2 className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`text-sm hidden md:flex items-center gap-5 ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-sky-500 transition duration-500 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/savedblogs"
              className="hover:text-sky-500 transition duration-500 ease-in-out"
            >
              Save Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-sky-500 transition duration-500 ease-in-out"
            >
              Blogs
            </Link>
          </li>
          <li>
            <button
              onClick={handleWriteBlog}
              className="bg-white text-black border hover:bg-black hover:text-sky-500 py-2 px-4 rounded-full focus:outline-none transition duration-500 ease-in-out"
            >
              Write Blog
            </button>
          </li>
        </ul>
      </nav>
      <ul
        className={`md:hidden ${
          isOpen ? "border-t flex flex-col gap-2 p-4" : "hidden"
        }`}
      >
        <li>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/"
            className="hover:text-sky-500 transition duration-500 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="/blogs"
            className="hover:text-sky-500 transition duration-500 ease-in-out"
          >
            Blogs
          </Link>
        </li>
        <li>
          <button
            onClick={handleWriteBlog}
            className="w-full bg-white text-black border hover:bg-black hover:text-sky-500  py-2 px-4 rounded-full focus:outline-none transition duration-500 ease-in-out"
          >
            Write Blog
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
