const Slide = ({ slide }) => {
  return (
    <div
      className='slide bg-no-repeat bg-center w-screen bg-cover h-full bg-fixed'
      style={{ backgroundImage: `url(${slide.src}) ` }}
      key={slide.id}
    >
      <div className='slide-content h-full w-full flex flex-col justify-between items-start text-white p-5 lg:p-12 overflow-hidden'>
        <img
          src={slide.sunImage}
          alt='White Sun Image'
          className='xl:w-16 lg:w-14 w-12'
        />
        <h1 className='xl:text-5xl lg:text-3xl text-2xl font-medium leading-[1.3] pr-[45%]'>
          {slide.headline}
        </h1>
        <div>
          <h4 className=' xl:text-2xl lg:text-xl  font-medium'>{slide.name}</h4>
          <p className=' xl:text-xl  lg:text-[1rem] font-semibold'>
            {slide.designation}
          </p>
          <p>{slide.agency}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
