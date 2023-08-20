// data
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Crafting compelling brand identities that resonate. From logos to palettes, I'll set you apart and leave a lasting mark.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Transforming ideas into visually stunning interfaces. Seamless blend of artistry and functionality for exceptional user experiences.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Coding your visions into robust, scalable realities. Websites, PWA, and e-commerce tailored to your unique needs.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Words that captivate and convert. From headlines to content, I'll shape your message to engage and drive action.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Boosting visibility, driving organic traffic. Elevate your online presence with keyword optimization and technical enhancements. Stand out, get found.",
  },
];
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
        color: "#FF5733",
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-pink-200/30 h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-black transition-all duration-300">
              <div className="text-4xl text-pink-600 mb-5">{item.icon}</div>
              <div className="mb-6">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] text-[10px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-pink-600 transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
