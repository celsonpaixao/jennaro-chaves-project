import style from "./style.module.css";
import AppAssetsImages from "../../../res/app_assets_images";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <img
          src={AppAssetsImages.logo}
          alt="Canil Helkeys"
          className={style.logo}
        />
        <h1 className={style.title}>
          Faça seu login <br /> <span>Na plataforma</span>
        </h1>
        <p className={style.subtitle}>
          Faça login para poder navegar na plataforma <IoIosArrowRoundForward />
        </p>
      </div>

      <div className={style.rightSection}>
        <form className={style.form}>
          <div className="form-input">
            <MdOutlineAlternateEmail />
            <input type="email" placeholder="Insira seu e-mail" tabIndex={1} />
          </div>
          <div className="form-input">
            <MdLockOutline />
            <input
              type="password"
              placeholder="Insira sua senha"
              tabIndex={2}
            />
          </div>
          <Link to="/register" className={style.textInfo}>
            Esqueci minha senha !
          </Link>

          <button type="submit" className={style.submitButton}>
            Entrar <IoIosArrowRoundForward />
          </button>
          <Link to="/register" className={style.textInfocenter}>
            Ainda não tenho uma !
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
