import React from "react";

export default function SavedPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("savedBlogs");
    if (storedProducts) {
      setBlogs(JSON.parse(storedProducts));
    }
  }, []);
  return (
    <div>
      {blogs?.map((blog) => (
        <div>
          <h1>{blog.title}</h1>
        </div>
      ))}
    </div>
  );
}
