"use client";

import { useRef, useState, useEffect } from "react";
import style from "./style.module.css";
import DogCard from "../../../../components/dogcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import AppAssetsImages from "../../../../../res/app_assets_images";
import SectionTitle from "../../../../components/titleLine";
import { useDogHook } from "../../../../../hooks/useDogHook";

const ForYou = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { dogs, fetchDogs, loading } = useDogHook();

  useEffect(() => {
    fetchDogs();
  }, [fetchDogs]);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={style.container}>
      <SectionTitle
        fontSize="32px"
        title="O que temos para si"
        lineWidth={300}
      />

      <button className={style.navButton} onClick={handlePrev}>
        <img src={AppAssetsImages.arrow6} alt="Anterior" />
      </button>

      <button className={style.navButton} onClick={handleNext}>
        <img src={AppAssetsImages.arrow5} alt="Próximo" />
      </button>

      <div className={style.pagination}>
        {dogs.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${
              activeIndex === index ? style.active : ""
            }`}
          />
        ))}
      </div>

      <div className={style.slidebody}>
        {loading ? (
          <p>🔄 Carregando cães...</p>
        ) : (
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Pagination, Navigation]}
            spaceBetween={35}
            slidesPerView="auto"
            centeredSlides={true}
            loop={dogs.length > 4}
            watchOverflow={true}
          >
            {dogs.map((dog, index) => (
              <SwiperSlide key={index} style={{ maxWidth: "300px" }}>
                <DogCard {...dog} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ForYou;
