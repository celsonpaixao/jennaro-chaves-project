import { useRef, useState, useEffect } from "react";
import style from "./style.module.css";
import DogCard from "../../../../components/dogcard";
import { DogService } from "../../../../../data/remote/dog/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import AppAssetsImages from "../../../../../res/app_assets_images";
import SectionTitle from "../../../../components/titleLine";
import DogModel from "../../../../../model/dog_model";

const Toadopt = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dogs, setDogs] = useState<DogModel[]>([]);

  useEffect(() => {
    DogService.getAll()
      .then(setDogs)
      .catch(console.error);
  }, []);

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
        title="Cachorros a Venda "
        lineWidth={400}
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
            className={`${style.dot} ${activeIndex === index ? style.active : ""}`}
          />
        ))}
      </div>
      <div className={style.slidebody}>
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
            <SwiperSlide key={dog.id ?? index} style={{ maxWidth: "300px" }}>
              <DogCard {...dog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Toadopt;
