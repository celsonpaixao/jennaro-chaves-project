import style from "./style.module.css";
import AppAssetsImages from "../../../../../res/app_assets_images";
import { IoIosArrowRoundForward } from "react-icons/io";

const MoreShoped = () => {
  return (
    <div className={style.container}>
      <div className={`${style.card} ${style.cardDog1}`}>
        <p className={style.title}>
          Cachorros mais
          <br /> Vendidos
        </p>
        <img
          src={AppAssetsImages.dog1}
          alt="Cachorro mais vendido"
          className={style.image}
        />
        <div className={style.arrowContainer}>
          <IoIosArrowRoundForward className={style.arrowIcon} />
        </div>
      </div>

      <div className={`${style.card2}`}>
        {/* Segunda linha - dois cards lado a lado */}
        <div className={style.row}>
          <div className={`${style.card} ${style.cardDog2}`}>
            <p className={style.title}>
              Cachorros
              <br /> Docinho docinho
            </p>
            <img
              src={AppAssetsImages.dog2}
              alt="Cachorros docinhos"
              className={style.image}
            />
            <div className={style.arrowContainer}>
              <IoIosArrowRoundForward className={style.arrowIcon} />
            </div>
          </div>
          <div className={`${style.card} ${style.cardDog3}`}>
            <p className={style.title}>
              Filhotes de
              <br /> cachorros
            </p>
            <img
              src={AppAssetsImages.dog3}
              alt="Filhotes de cachorros"
              className={style.image}
            />
            <div className={style.arrowContainer}>
              <IoIosArrowRoundForward className={style.arrowIcon} />
            </div>
          </div>
        </div>

        {/* Cachorros mais adotados (card grande) */}
        <div className={`${style.card} ${style.cardDog4}`}>
          <p className={style.title}>
            Cachorros mais
            <br /> adotados
          </p>
          <img
            src={AppAssetsImages.dog4}
            alt="Cachorros mais adotados"
            className={style.image}
          />
          <div className={style.arrowContainer}>
            <IoIosArrowRoundForward className={style.arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreShoped;
