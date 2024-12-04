// testimonial data
const testimonialData = [
  {
    image: '/black03.jpg',
    name: 'Okeymmadu Eric',
    message:
      'I gained remarkable value from his service; he fully harnessed the potential of the work I entrusted to him, exceeding my expectations with exceptional results.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Victory Sarah',
    message:
      'The outcomes I obtained were exceptional; his service went above and beyond my initial expectations.I am extremely pleased with the level of service I received.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Praise Onubiyi',
    message:
      'I was pleasantly surprised by the remarkable value his service provided; he skillfully maximized the potential of my project, delivering outstanding results that exceeded my expectations.',
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";

const WorkSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
        color: "#FF5733",
      }}
      modules={[Navigation, Pagination]}
      className="h-[380px] sm:h-[440px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" className="rounded-2xl"/>
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0">
                  <FaQuoteLeft />
                </div>
                <div className="xl:text-lg text-center md:text-left ">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

