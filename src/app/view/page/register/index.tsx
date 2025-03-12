import style from "./style.module.css";
import AppAssetsImages from "../../../res/app_assets_images";
import { MdLockOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <img
          src={AppAssetsImages.logo}
          alt="Canil Helkeys"
          className={style.logo}
        />
        <h1 className={style.title}>
          Crie já a sua conta <br /> <span>Na plataforma</span>
        </h1>
        <p className={style.subtitle}>
          Faça login para poder navegar na plataforma <IoIosArrowRoundForward />
        </p>
      </div>

      <div className={style.rightSection}>
        <form className={style.form}>
          <div className="form-input">
            <IoPersonOutline />
            <input type="text" placeholder="Insira seu nome" tabIndex={1} />
          </div>
          <div className="form-input">
            <MdOutlineAlternateEmail />
            <input type="email" placeholder="Insira seu e-mail" tabIndex={2} />
          </div>
          <div className="form-input">
            <MdOutlineCall />
            <input
              type="tel"
              placeholder="Insira seu numero de telefone"
              tabIndex={3}
            />
          </div>
          <div className="form-input">
            <MdLockOutline />
            <input
              type="password"
              placeholder="Insira sua senha"
              tabIndex={4}
            />
          </div>
          <div className="form-input">
            <MdLockOutline />
            <input
              type="password"
              placeholder="Confirme sua senha"
              tabIndex={5}
            />
          </div>

          <Link to="/login" className={style.forgotPassword}>
            Já tenho uma conta !
          </Link>

          <button type="submit" className={style.submitButton}>
            Entrar <IoIosArrowRoundForward />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
