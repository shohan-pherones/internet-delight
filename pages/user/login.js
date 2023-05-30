import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/user/profile";

      router.replace(destination);
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
        <div className='login-image hidden md:block w-full h-screen overflow-hidden relative'>
          <Image
            src='https://images.pexels.com/photos/13557022/pexels-photo-13557022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='A Paraglider above Clouds'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            priority
          />
          <div className='w-full h-full bg-gradient-to-t from-transparent to-black/60 text-white absolute top-0 left-0 p-10 space-y-5'>
            <h2 className='text-5xl leading-tight tracking-wide font-semibold capitalize'>
              Discover a Vibrant Blogging Community!
            </h2>
            <p className='leading-relaxed tracking-wider'>
              Welcome to our blog community! Join us to share your thoughts,
              ideas, and expertise with like-minded individuals. Create an
              account today to publish articles, engage in discussions, and
              explore a world of knowledge. Let your voice be heard!
            </p>
          </div>
        </div>

        <div className='login-content items-center justify-center flex flex-col gap-5'>
          <h2 className='section-title font-medium text-2xl uppercase'>
            You are not signed in!
          </h2>
          <p className='text-gray-500 font-semibold'>
            Sign in to unlock more exclusive features
          </p>
          <button
            onClick={loginWithGoogle}
            className='bg-gray-900 text-white h-12 w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase rounded'
          >
            <span>
              <FcGoogle />
            </span>{" "}
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/user/profile";
    return {
      redirect: {
        destination: destination,
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
