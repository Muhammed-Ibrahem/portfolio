import SectionHeader from "../UI/SectionHeader";
import StackImages from "../assets/StackImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
const Stack = () => {
  const [Count, SetCount] = useState(3);
  const SlidesCounts = () => {
    const SlideCount =
      window.innerWidth >= 1536
        ? 8
        : window.innerWidth >= 768
        ? 5
        : window.innerWidth >= 640
        ? 4
        : window.innerWidth >= 414
        ? 3
        : window.innerWidth >= 280
        ? 2
        : 1;
    SetCount(SlideCount);
  };
  useEffect(() => {
    SlidesCounts();
    window.addEventListener("resize", SlidesCounts);
    return () => {
      window.removeEventListener("resize", SlidesCounts);
    };
  }, []);
  return (
    <section id="stack" className="container mx-auto space-y-20 py-20 px-4">
      <SectionHeader
        title="My Stack"
        description="Technologies I've been working with recently"
      />
      <Swiper
        slidesPerView={Count}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {StackImages.map((e) => {
          return (
            <SwiperSlide
              key={uuid()}
              className={`flex items-center justify-center px-4 ${
                e.name === "GITHUB"
                  ? "h-[120px] max-w-[120px] rounded-full bg-black"
                  : ""
              }`}
            >
              <img
                className="h-[120px] w-[120px] select-none"
                src={e.src}
                alt={e.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Stack;
