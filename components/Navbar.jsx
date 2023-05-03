import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleWriteBlog = () => {
    if (session) {
      router.push("/blogs/create");
    } else {
      router.push("/user/login?destination=/blogs/create");
    }
  };

  return (
    <header className="container mx-auto flex items-center justify-between h-20 ">
      <div className="logo">
        <Link href="/" className="text-2xl text-gray-700 font-semibold">
          Internet <span className="text-sky-600">Delight</span>
        </Link>
      </div>

      <nav className="nav-links">
        <ul className="flex gap-10 text-lg">
          <li>
            <Link href="/" className="hover:text-sky-600 duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-sky-600 duration-300">
              Blogs
            </Link>
          </li>
          <li>
            <button
              onClick={handleWriteBlog}
              className="hover:text-sky-600 duration-300"
            >
              Write Blog
            </button>
          </li>
          <li>
            <Link href="/about" className="hover:text-sky-600 duration-300">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div className="login-btn">
        {!session ? (
          <Link
            href="/user/login"
            className="text-lg hover:text-sky-600  duration-300"
          >
            Log in
          </Link>
        ) : (
          <Link
            href="/user/profile"
            className="text-lg hover:text-sky-600 duration-300"
          >
            Profile
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
