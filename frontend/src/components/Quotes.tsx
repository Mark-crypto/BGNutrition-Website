// components/QuotesCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "Eating healthy is the best choice one can make as it provides the body with the necessary nutrients to prevent chronic diseases from developing.",
    author: "Prof. Agatha Christine",
  },
  {
    text: "Our food should be our medicine, and our medicine should be our food.",
    author: "Prof. Agatha Christine",
  },
  {
    text: "To eat is a necessity, but to eat intelligently is an art.",
    author: "Prof. Agatha Christine",
  },
  {
    text: "The first wealth is health.",
    author: "Prof. Agatha Christine",
  },
];

const Quotes = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-10 px-4">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        effect="fade"
        className="rounded-lg"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl shadow-lg min-h-[200px] flex flex-col justify-center items-center text-center"
            >
              <p className="text-xl italic mb-4">&ldquo;{quote.text}&rdquo;</p>
              <p className="text-md font-semibold">— {quote.author}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Quotes;
