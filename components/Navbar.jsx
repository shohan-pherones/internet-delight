import { useSession } from "next-auth/react";
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
    <div>
      <button onClick={handleWriteBlog}>Write Blog</button>
    </div>
  );
};

export default Navbar;
