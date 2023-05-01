import PostForm from "@/components/PostForm";
import React from "react";

const CreateBlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl my-3">What do you think now!</h1>
      <div className="post-wrapper">
        <PostForm />
      </div>
    </div>
  );
};

export default CreateBlogPage;
