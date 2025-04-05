import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide4 from "@/assets/slide4.webp";
import slide5 from "@/assets/slide5.webp";
import slide7 from "@/assets/slide7.jpg";
import slide8 from "@/assets/slide8.jpg";

import "../App.css";
import FadeInImage from "./FadeInImage";
import { useEffect, useState } from "react";
import HeroSkeleton from "./skeletons/HeroSkeleton";

const Hero = () => {
  const slides = [slide4, slide5, slide7, slide8];
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === slides.length) {
          setAllLoaded(true);
        }
      };
    });
  }, []);

  if (!allLoaded) {
    return <HeroSkeleton />;
  }
  return (
    <>
      <Swiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        draggable={false}
        speed={800}
        grabCursor={true}
        cssMode={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide className="relative" key={index}>
              <FadeInImage src={slide} alt={`Slide ${index + 1}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
