import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <>
      <div id="post-container" className="w-11/12 mx-auto">
        <div id="post-hero-section">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:p-6">
            <div className="grid md:items-center md:pr-16 my-7  md:w-full">
              <small>
                <b>20 Jan 2022 . 10 min read</b>
                <h1 className="md:text-3xl md:font-bold">
                  Designing user interface aesthetics that sync with the natural
                  environment
                </h1>
                <p className="text-gray-500 my-7">
                  understanding the nuances of how light effect can be realised
                  in modern user interface design
                </p>
                <div
                  id="port-author"
                  className="grid grid-cols-[50px_1fr] my-5 gap-5"
                >
                  <div>
                    <Image
                      src={`https://i.pinimg.com/originals/ea/0b/78/ea0b7862343251ee7e14434f8683fa74.jpg`}
                      width={50}
                      height={20}
                      className="rounded-full h-[50px]"
                    />
                  </div>
                  <div>
                    <strong>Frankie Sullivan</strong>
                    <br />
                    <span className="text-gray-500">Brand Designer, Stdio</span>
                  </div>
                </div>
              </small>
            </div>
            <div>
              <Image
                src={`https://i.pinimg.com/originals/ea/0b/78/ea0b7862343251ee7e14434f8683fa74.jpg`}
                width={500}
                height={800}
                className="w-full h-[80vh]"
              />
            </div>
          </div>
        </div>
        <div id="post-content-section" className="md:w-3/6 md:mx-auto py-8">
          <p className="first-letter:text-7xl first-letter:font-semibold first-letter:mr-3  first-letter:float-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a
            asperiores commodi sint fugiat itaque voluptatibus? Quam et tempore
            repudiandae exercitationem officia nam facere at sequi in soluta
            minus quisquam omnis dicta quo magni esse pariatur sint, cum ducimus
            earum autem doloribus modi asperiores ad. Eum similique quasi nihil
            laudantium, placeat, amet tempora qui odio aperiam consequuntur a.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            blanditiis sint necessitatibus odio enim provident perferendis.
            Numquam adipisci quae praesentium nihil inventore doloremque ullam
            nostrum quos quis provident, tenetur optio officia? Dicta delectus
            impedit sunt eius nam magni voluptatum earum optio. In dignissimos
            ipsum quo iusto itaque, velit, veritatis rerum quisquam sed sunt
            provident labore minima ducimus aliquam, rem dolor! Quis, voluptatem
            ratione consequuntur suscipit, culpa vel explicabo magnam enim
            expedita laborum molestiae eos ut officiis dolorum maxime. Nesc
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            vitae, nobis, iste aliquid voluptates labore dolore ducimus
            voluptatem provident nemo laudantium ipsum voluptatibus veniam
            facilis repellendus, dolorem omnis cumque quia excepturi? Laborum
            numquam optio omnis obcaecati libero odit laboriosam harum beatae
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
