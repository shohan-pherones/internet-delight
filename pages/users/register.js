import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

const register = () => {
  return (
    <div className="register w-[100%] h-screen md:flex overflow-hidden">
      <div className="register-slider hidden md:block h-screen w-3/5 bg-gray-600">
        <Slider />
      </div>

      <form className="register-form h-screen w-full py-12 md:py-0 md:p-5 md:w-2/5 flex flex-col justify-start md:justify-center mt-5 md:mt-0 p-5 lg:px-14 gap-3">
        <Image
          src="https://res.cloudinary.com/drgxflcsb/image/upload/v1681476821/internet-delight/black-sun_e0iwnk.png"
          alt="White Sun Image"
          className="w-12"
          width={50}
          height={50}
        />
        <h2 className="text-3xl font-medium text-gray-900">
          Create an account
        </h2>
        <p className="text-gray-500 font-medium mb-5">
          {`Let's get started with your 30 days free trial.`}
        </p>
        <input
          type="text"
          className="name placeholder:text-gray-500 border-b-2 py-3 outline-none text-[1.1rem] text-gray-700 focus:border-gray-700 duration-300"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="email placeholder:text-gray-500 border-b-2 py-3 outline-none text-[1.1rem] text-gray-700 focus:border-gray-700 duration-300"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="password placeholder:text-gray-500 border-b-2 py-3 outline-none text-[1.1rem] text-gray-700 focus:border-gray-700 duration-300"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          className="bg-gray-800 py-3 rounded-xl text-[1.1rem] text-white outline-none cursor-pointer hover:bg-gray-700 duration-300 border-2 border-gray-700 mt-5"
          value="Create account"
        />
        <button className="sign-up-btn text-gray-800 py-2 rounded-xl text-[1.1rem] outline-none cursor-pointer font-medium flex justify-center items-center gap-1 border-2 border-gray-300  hover:border-gray-400 duration-300">
          <Image
            className="w-9 h-9"
            src="https://res.cloudinary.com/drgxflcsb/image/upload/v1681672788/internet-delight/google-icon_leweq8.png"
            alt="Google logo"
            width={50}
            height={50}
          />
          <span>Sign up with Google</span>
        </button>
        <p className="text-gray-600 text-center mt-5">
          Already have an account?{" "}
          <Link
            href="/users/login"
            className="underline underline-offset-2 text-gray-900 font-semibold"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default register;
