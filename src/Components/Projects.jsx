import ProjectCard from "../UI/ProjectCard";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { v4 as uuid } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../UI/SectionHeader";
import ProjectsData from "../Projects.json";
const Projects = () => {
  const [Count, SetCount] = useState(3);
  const SlidesCounts = () => {
    const SlideCount =
      window.innerWidth >= 1280
        ? 4
        : window.innerWidth > 1024
        ? 3
        : window.innerWidth > 640
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
    <section id="projects" className="container mx-auto py-20">
      <SectionHeader title="Projects" description="Things i've built so far" />
      <Swiper
        slidesPerView={Count}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper mt-20 items-center justify-center  px-4 py-6"
      >
        {ProjectsData.map((e) => {
          return (
            <SwiperSlide key={uuid()} className="w-full">
              <ProjectCard {...e} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
