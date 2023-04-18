import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/drgxflcsb/image/upload/v1681846280/internet-delight/register-image-2_i41jgd.png",
    sunImage:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1681476821/internet-delight/white-sun_zdng5c.png",
    headline:
      "Join our blogging community and connect with like-minded individuals.",
    name: "Olivia Rhye",
    designation: "Content Strategist",
    agency: "Pixel Peak Agency",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/drgxflcsb/image/upload/v1681583174/internet-delight/register-image-1_niflxj.png",
    sunImage:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1681476821/internet-delight/white-sun_zdng5c.png",
    headline: "Subscribe for the latest blog posts, tips, and insights!",
    name: "Sara perker",
    designation: "Web Developer",
    agency: "Content Savvy Solutions",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/drgxflcsb/image/upload/v1681847749/internet-delight/project_image_frame_o4vqda.png",
    sunImage:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1681476821/internet-delight/white-sun_zdng5c.png",
    headline:
      "Unlock member-only content and take your blog to the next level.",
    name: "Maya Patel",
    designation: "Social Media Manager",
    agency: "Social Scope Digital",
  },
];

const Slider = () => {
  // Manual Sliding functionality
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className='slider-frame relative w-full overflow-hidden'>
      <div
        className='slider h-screen flex w-[300vw] transition-all ease-out duration-1000 overflow-hidden'
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {/* Take data from data arrey */}
        {data.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </div>

      <div className='slider-buttons absolute xl:text-2xl lg:xl right-8 bottom-[9vh] flex gap-6 text-white justify-center'>
        <button
          onClick={prevSlide}
          className='prev-btn border border-white/70 p-2 rounded-full outline-none'
        >
          <span className='hover:text-sky-950 duration-300'>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className='next-btn border border-white/70 p-2 rounded-full outline-none'
        >
          <span className='hover:text-sky-950 duration-300'>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
