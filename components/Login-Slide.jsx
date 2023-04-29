import Image from "next/image";

const Slide = ({ image }) => {
  return (
    <div
      className="slide bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${image.src})` }}
      key={image.id}
    >
      <div className="slide-texts flex flex-col w-full h-full items-start justify-between p-10 gap-5 text-white  overflow-hidden ">
        <Image
          src={image.sunImage}
          alt="Sun Image"
          className="xl:w-16 lg:w-14 w-12"
          width={50}
          height={50}
        />
        <h1 className="text-[2.2rem] font-medium w-[55%] mt-[8rem] text-justify">
          {image.headline}
        </h1>

        <div className="content">
          <div className="left">
            <h3 className="text-2xl text-gray-50 font-bold uppercase">
              {image.name}
            </h3>
            <p className="text-xl  text-gray-50 font-semibold">
              {image.designation}
            </p>
            <p>{image.agency}</p>
          </div>

          <div className="right">
            <img src={image.star} alt="star image" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
