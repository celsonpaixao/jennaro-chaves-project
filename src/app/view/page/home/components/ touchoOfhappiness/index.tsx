import AppAssetsImages from "../../../../../res/app_assets_images";
import SectionTitle from "../../../../components/titleLine";
import style from "./style.module.css";
const TouchOfHappiness = () => {
  return (
    <div className={style.container}>
      <div className={style.content1}>
        <img
          className={style.content1_img}
          src={AppAssetsImages.person_image_2}
          alt=""
        />
      </div>

      <div className={style.content2}>
        <p className={style.content2_title}>
          <span>Dê um toque de</span>
          <span>
            <SectionTitle
              title=" felicidade"
              fontSize="32px"
              color="#3999BF"
              lineWidth={200}
            />
          </span>
          <span>em</span>
          <br /> <span>sua vida.</span>
        </p>
        <p className={style.content2_description}>
          O toque de felicidade que um cachorro pode proporcionar vai muito além
          de sua <br /> lealdade e brincadeiras.
          <br />
          <br /> Ele é um amigo fiel, sempre disposto a te alegrar com um
          simples movimento da
          <br /> cauda ou uma corrida no parque, um convite constante para
          desacelerar e<br /> aproveitar os pequenos momentos, uma caminhada
          tranquila, uma tarde no
          <br /> sofá ou até mesmo uma brincadeira no quintal.
        </p>

        <button className="prima-astronaut-button-image">
          Quero Comprar <img src={AppAssetsImages.pata1} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TouchOfHappiness;
