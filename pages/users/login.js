import { useState } from "react";
import Link from "next/link";
import Slider from "@/components/Login-Slider";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login w-full h-screen md:flex overflow-hidden">
      <div className="login-form h-100vh w-full md:w-2/5 flex flex-col justify-start md:justify-center lg:px-12 gap-3 p-4">
        <Image
          src="https://res.cloudinary.com/drgxflcsb/image/upload/v1681476821/internet-delight/black-sun_e0iwnk.png"
          alt="Image"
          className="w-12"
          width={50}
          height={50}
        />
        <h2 className="text-4xl text-start font-semibold ">
          Welcome back,Olivia
        </h2>
        <p className="text-start font-semibold mt-3 text-gray-500">
          Welcome back! Please enter your details
        </p>

        <button className="login-btn text-gray-900 py-3 rounded-xl font-medium flex justify-center items-center gap-1 border border-gray-300  cursor-pointer outline-none hover:border-gray-400 duration-300">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1682575860/google_qav8dh.png"
            alt="Image"
            className="w-5"
            width={50}
            height={50}
          />
          <span className="text-gray-500">Login With Google</span>
        </button>

        <p className="text-center text-xl text-gray-500 mt-5"> or</p>

        <form className="flex flex-col gap-5 py-14 h-screen w-full ">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email placeholder:text-gray-500 border-b-2 py-3 outline-none text-[1.1rem] text-gray-700 focus:border-gray-700 duration-300"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" password  placeholder:text-gray-500 border-b-2 py-3 outline-none text-[1.1rem] text-gray-700 focus:border-gray-700 duration-300"
          />

          <div className="flex gap-16">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span className="font-medium text-gray-600">
                Remember for 30 days
              </span>
            </div>

            <Link
              href="/users/register"
              className="underline text-gray-800 font-semibold"
            >
              {" "}
              Forgot Password
            </Link>
          </div>

          <input
            type="submit"
            className="bg-gray-900 font-semibold text-gray-100 py-3 rounded-xl mt-3 hover:bg-gray-800 duration-300"
            value="Log in"
          />

          <div className="flex gap-2 mx-auto mt-[-1rem]">
            <p className="text-gray-500 font-medium">Don't have an account?</p>

            <Link
              href="/users/register"
              className=" underline font-medium text-gray-800"
            >
              {" "}
              Sign up for free
            </Link>
          </div>
        </form>
      </div>
      <div className="login-slider hidden  md:block h-full w-[60%]">
        <Slider />
      </div>
    </div>
  );
};

export default Login;
