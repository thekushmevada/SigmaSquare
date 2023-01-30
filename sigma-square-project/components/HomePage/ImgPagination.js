import Image from "next/image";
import React from "react";
import mainpage_img_1 from "../../img/mainpage_img_1.png";
import mainpage_img_2 from "../../img/mainpage_img_2.png";
import mainpage_img_3 from "../../img/mainpage_img_3.png";
import mainpage_img_4 from "../../img/mainpage_img_4.png";
import Carousel from "react-bootstrap/Carousel";
const ImgPagination = () => {
  const imgPagination = {
    items: [
      {
        src: mainpage_img_1,
        title: "A smarter way to move forward",
        subtitle: "Start your carrer with us !!",
        desc: "To ‘move forward with’ something means to progress with it. If you chose to move forward, you agree to make the next steps or to continue in the process.We are here to help you to brighten your Future, to grow your career.",
      },
      {
        src: mainpage_img_2,
        title: "History of SigmaSquare",
        subtitle: "Our Story",
        desc: "SIGMA SQUARE is an Indian business and employment-oriented online service that operates via websites and mobile apps , launched on May 11, 2003. We have accomplished so much over the years. To create a world where we provide employment to those who are deserving that has always been our goal.",
      },
      {
        src: mainpage_img_3,
        title: "Your Idea, Our Execution",
        subtitle: "REALLYYYY!!!!",
        desc: "We are here to execute your ideas, all you need is to register your details on our website and attach your CV. If you are eligible than you can start doing your work from your house and can earn money. You can start earning at early age if you have enough skills for it. So give your best, try harder and never stop.",
      },
      {
        src: mainpage_img_4,
        title: "GROW MORE:",
        subtitle: "HOW??",
        desc: "You can grow your future here just by simply doing the tasks allotted to you. For that you people have to register and apply your CVs to our website. If you are eligible for that post, you will be selected. You can learn lots of things here, improve your skills, can be a master in your field.",
      },
    ],
  };

  return (
    <div className="relative h-auto w-full">
      <Carousel>
        {imgPagination.items.map((data) => {
          return (
            <Carousel.Item>
              <Image
                src={data.src}
                alt="main image"
                style={{
                  height: "calc(100vh - 96px)",
                  width: "100%",
                  position: "absolute",
                }}
              />

              <div
                className="absolute opacity-40 bg-black w-3/4"
                style={{ height: "calc(100vh - 96px)" }}
              ></div>
              <div
                className="absolute opacity-40 bg-black w-full"
                style={{ height: "calc(100vh - 96px)" }}
              ></div>
              <div
                className="relative flex flex-col justify-center items-center text-white w-full md:w-1/2 px-4 pt-20"
                style={{ height: "calc(100vh - 96px)" }}
              >
                <div className="w-full md:w-2/3 sm:w-3/4">
                  <h1 className="text-6xl font-sans text-white font-semibold">
                    {data.title}
                  </h1>
                  <h2 className="text-4xl font-sans text-white font-semibold">
                    {data.subtitle}
                  </h2>
                  <p>{data.desc}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImgPagination;
