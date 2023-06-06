import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20  gap-14 md:gap-10 lg:gap-8">
          <div className="w-full">
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold text-white"
            >
              Internet delight
            </Link>
            <p className="text-gray-400 mt-5 w-full md:w-4/5 leading-8">
              captivating articles, insightful musings on Internet Delight.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="text-gray-400 flex gap-3">
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
                  href="/blogs"
                  className="hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  All Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <div className=" flex flex-col justify-between gap-2">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Connect with us
              </h2>
              <div className="social-icons flex gap-5 text-2xl items-center">
                <Link href="https://www.google.com/">
                  <FaFacebookF className="text-gray-400 hover:text-sky-500 mx-auto duration-500" />
                </Link>
                <Link href="https://www.google.com/">
                  <FaLinkedinIn className="text-gray-400 hover:text-sky-500 mx-auto duration-500" />
                </Link>
                <Link href="https://www.google.com/">
                  <FaTwitter className="text-gray-400 hover:text-sky-500 mx-auto duration-500" />
                </Link>
                <Link href="https://www.google.com/">
                  <FaInstagram className="text-gray-400 hover:text-sky-500 mx-auto duration-500" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Need more information?
            </h2>
            <p className="text-gray-400 mb-4">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Email: internetdelight@.com</p>
          </div>
        </div>

        <div className="justify-center">
          <div className="lg:w-full md:w-2/3 border-t border-gray-700">
            <p className="text-center text-gray-800 text-lg mt-8">
              &copy; {new Date().getFullYear()} Internet delight. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
