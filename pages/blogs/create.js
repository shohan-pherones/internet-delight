import { useForm } from "react-hook-form";

const CreateBlogPage = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="container mx-auto py-20 min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form mx-auto max-w-screen-md flex flex-col items-center gap-5 text-lg "
      >
        <h2 className="text-3xl text-center font-medium mb-5 py-4">
          Create Blog
        </h2>

        <div className="form-control flex flex-col gap-2 w-full">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Spend management space..."
            className={`title border  border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.title?.type === "required" && "border-rose-500"
            }`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="body" className="font-medium">
            Body
          </label>
          <textarea
            {...register("body", { required: true })}
            placeholder="Updated to note that the  Microsoft..."
            className={`body border border-gray-300 focus:border-gray-600 py-3
            px-5 rounded-xl outline-none duration-300 
              ${errors.body?.type === "required" && "border-rose-500"}`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="fullbody" className="font-medium">
            Full Body
          </label>
          <textarea
            {...register("fullbody", { required: true })}
            placeholder="Meditation is an ancient practice that..."
            className={`fullbody border border-gray-300  focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.fullbody?.type === "required" && "border-rose-500"
            }`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="cover" className="font-medium">
            Cover Url
          </label>
          <input
            type="cover"
            {...register("cover", { required: true })}
            placeholder="https://images.pexels.com/photos/..."
            className={`cover border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.cover?.type === "required" && "border-red-500"
            }`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="authorImage" className="font-medium">
            Author Image Url
          </label>
          <input
            type="authorImage"
            {...register("authorImage", { required: true })}
            placeholder="https://randomuser.me/api/portraits...."
            className={`author-image border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.authorImage?.type === "required" && "border-rose-500"
            }`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="authorName" className="font-medium">
            Author Name
          </label>
          <input
            type="text"
            {...register("authorname", { required: true })}
            placeholder="Samantha Williams"
            className={`author-name border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.authorname?.type === "required" && "border-rose-500"
            }`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="authorDesignation" className="font-medium">
            {" "}
            Author Designation
          </label>
          <input
            type="text"
            {...register("authorDesignation", { required: true })}
            placeholder="Food Enthusiast"
            className={`author-designation  border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.authorDesignation?.type === "required" && "border-rose-500"
            }`}
          />
        </div>

        <div className="form-control flex flex-col w-full gap-2">
          <label htmlFor="tags" className="font-medium">
            {" "}
            Tags
          </label>
          <input
            type="tags"
            {...register("tags", { required: true })}
            placeholder="#outdoors, #nature, #adventure"
            className={`tage border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none duration-300 ${
              errors.tags?.type === "required" && "border-rose-500"
            }`}
          />
        </div>

        <div className="submit py-3 w-full rounded-xl bg-black mt-14 text-center overflow-hidden">
          <button type="submit" className="text-white font-medium">
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
