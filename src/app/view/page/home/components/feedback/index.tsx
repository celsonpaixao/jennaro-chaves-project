import { useRef } from "react";
import { ReviewCard } from "../../../../components/feedbackCard";
import style from "./style.module.css";
import reviews from "../../../../../data/local/feedbacks.json";
import SectionTitle from "../../../../components/titleLine";
import AppAssetsImages from "../../../../../res/app_assets_images";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const FeedBack = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div className={style.container}>
      <p className={style.title}>
        O que dizem os nossos
        <span>
          <SectionTitle
            fontSize="36px"
            title="Clientes"
            lineWidth={180}
            color="#50B4E5"
          />
        </span>
      </p>

      <div className={style.controls}>
        <button
          className={`${style.navButton} ${style.left}`}
          onClick={handlePrev}
        >
          <img src={AppAssetsImages.arrow6} alt="Anterior" />
        </button>
        <button
          className={`${style.navButton} ${style.right}`}
          onClick={handleNext}
        >
          <img src={AppAssetsImages.arrow5} alt="Próximo" />
        </button>
      </div>

      <div className={style.body}>
        <div className={style.body}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView="auto"
            loop={reviews.length > 4}
            watchOverflow={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
