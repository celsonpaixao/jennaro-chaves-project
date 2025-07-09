import { useState } from "react";
import style from "./style.module.css";
import AppAssetsImages from "../../../res/app_assets_images";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import GlobalSnackbar from "../../components/global/GlobalSnackbar";
import { useAuthHook } from "../../../hooks/useAuthHook";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuthHook();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      // O erro já é tratado pelo showSnackbar no hook
    }
  };

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
        <form className={style.form} onSubmit={handleSubmit}>
          <div className="form-input">
            <MdOutlineAlternateEmail />
            <input
              type="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              tabIndex={1}
            />
          </div>
          <div className="form-input">
            <MdLockOutline />
            <input
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              tabIndex={2}
            />
          </div>

          <Link to="/register" className={style.textInfo}>
            Esqueci minha senha !
          </Link>

          <button
            type="submit"
            className={style.submitButton}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"} <IoIosArrowRoundForward />
          </button>

          <Link to="/register" className={style.textInfocenter}>
            Ainda não tenho uma! Criar Conta
          </Link>
        </form>
      </div>

      <GlobalSnackbar />
    </div>
  );
};

export default Login;
