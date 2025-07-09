import style from "./style.module.css";
import AppAssetsImages from "../../../../../res/app_assets_images";
const Banner = () => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.body_info}>
          <p className={style.body_info_text1}>Aproveite o desconto de 30%</p>
          <p className={style.body_title}>
            Temos para si, as melhores <br /> <span>raças</span> e a felicidade
            na
            <br /> forma de <span>animal</span>
          </p>
          <button className="prima-astronaut-button-image-2 ">
            Quero adotar <img src={AppAssetsImages.pata1} alt="" />
          </button>
        </div>
        <img className={style.body_image} src={AppAssetsImages.image9} alt="" />
      </div>
    </div>
  );
};

export default Banner;
