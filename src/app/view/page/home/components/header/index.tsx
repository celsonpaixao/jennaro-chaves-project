import style from "./style.module.css";
import AppAssetsImages from "../../../../../res/app_assets_images";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
const Header = () => {
  const { goToRegister } = useAppNavigation();
  return (
    <div className={style.container}>
      <div className={style.navcontainer}>
        <img className={style.logo} src={AppAssetsImages.logo} alt="logo" />
        <ul className={style.tabs}>
          <li className={style.tab}>Home</li>
          <li className={style.tab}>Cães à venda</li>
          <li className={style.tab}>Cães para adoção</li>
          <li className={style.tab}>Nossos serviços</li>
        </ul>
        <div className={style.actions}>
          <img src={AppAssetsImages.iconShop} alt="icon heander" />
          <img src={AppAssetsImages.iconPerson} alt="icon heander" />
          <img src={AppAssetsImages.iconCallCenter} alt="icon heander" />
        </div>
      </div>
      <div className={style.body}>
        <button className={style.playButton}>
          <div>
            <img src={AppAssetsImages.play} alt="" />
          </div>
        </button>
        <div className={style.bodyInfo}>
          <img src={AppAssetsImages.arrow} alt="" className={style.arrow} />
          <p className={style.bodyInfoTitle}>
            Compre o seu <span className={style.highlightDog}>cachorro</span>
            <br />
            e dê um brilho em sua
            <br />
            <span className={style.highlightLife}>vida</span>.
          </p>

          <p className={style.bodyDescription}>
            Quando você compra um cachorro, não é apenas dar a <br /> ele um
            lar, mas também uma chance de experimentar o <br /> que é amado,
            cuidado e respeitado.
          </p>
          <button className="prima-astronaut-button" onClick={goToRegister}>
            Criar uma conta
          </button>
          <ul className={style.bodyInfoButton}>
            <div className={style.bodyInfoButtonContainer}>
              <p className={style.bodyInfoButtontitle}>96</p>
              <p className={style.bodyInfoButtondescription}>
                Numero de Cachorro
              </p>
            </div>

            <div className={style.bodyInfoButtonContainer}>
              <p className={style.bodyInfoButtontitle}>128</p>
              <p className={style.bodyInfoButtondescription}>
                Cachorros Vendidos
              </p>
            </div>
            <div className={style.bodyInfoButtonContainer}>
              <p className={style.bodyInfoButtontitle}>1200+</p>
              <p className={style.bodyInfoButtondescription}>
                Nº de clientes satisfeitos
              </p>
            </div>
          </ul>
        </div>
        <div className={style.imageContainer}>
          <img src={AppAssetsImages.polygon} alt="" className={style.polygon} />

          <img src={AppAssetsImages.ellipse} alt="" className={style.ellipse} />

          <div className={style.bodyimage}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
