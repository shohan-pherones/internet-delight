import { useState } from "react";
import Slide from "./Login-Slide";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const data = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682401848/bg_ldcy4u.jpg",
    sunImage:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682576290/sun_ab1gai.png",
    headline:
      "We move 10x faster than our peers and stay consistent. While they're bogged down with design debt, we're releasing new features.",
    name: "Sophie Hall",
    designation: "Founder,Catalog",
    agency: "Web Design Agency",
    star: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682450707/star_ynsann.webp",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682450591/bg3_frmfzb.jpg",
    sunImage:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682576290/sun_ab1gai.png",
    headline:
      "Our pace is unmatched, consistently releasing features while others get bogged down by design debt.",
    name: "Sarah Jones",
    designation: "Technology consultant",
    agency: "Stellar Strategy",
    star: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682450707/star_ynsann.webp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682450561/bg1_f8o4gk.jpg",
    sunImage:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682576290/sun_ab1gai.png",
    headline:
      "We move at an unprecedented pace, delivering features while others struggle with design debt.",
    name: "Hazel Baker",
    designation: "Project Manager",
    agency: "Finesse Agency",
    star: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1682450707/star_ynsann.webp",
  },
];

const Slider = () => {
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
    <div className="frame relative w-full overflow-hidden">
      <div
        className="slider h-screen flex w-[300vw] transition-all ease-out duration-1000 overflow-hidden"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>

      <div className="btns absolute xl:text-2xl lg:xl right-24 bottom-[8vh] flex gap-6 text-white justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn border border-white/70 p-2 rounded-full outline-none"
        >
          <span className="hover:text-gray-900 duration-300">
            <BsArrowLeft />
          </span>
        </button>

        <button
          onClick={nextSlide}
          className="prev-btn border border-white/70 p-2 rounded-full outline-none"
        >
          <span className="hover:text-gray-900 duration-300">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
