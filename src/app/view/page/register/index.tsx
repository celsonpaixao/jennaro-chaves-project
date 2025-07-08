import { useState } from "react";
import style from "./style.module.css";
import AppAssetsImages from "../../../res/app_assets_images";
import { MdLockOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthHook } from "../../../hooks/useAuthHook";
import GlobalSnackbar from "../../components/global/GlobalSnackbar";

const RegisterForm = () => {
  const { register, loading } = useAuthHook();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      await register(email, password, name, lastname);
      navigate("/login");
    } catch {
      // erro tratado no snackbar
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
          Crie já a sua conta <br /> <span>Na plataforma</span>
        </h1>
        <p className={style.subtitle}>
          Faça login para poder navegar na plataforma <IoIosArrowRoundForward />
        </p>
      </div>

      <div className={style.rightSection}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className="form-input">
            <IoPersonOutline />
            <input
              type="text"
              placeholder="Insira seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              tabIndex={1}
            />
          </div>
          <div className="form-input">
            <IoPersonOutline />
            <input
              type="text"
              placeholder="Insira seu sobrenome"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              tabIndex={2}
            />
          </div>
          <div className="form-input">
            <MdOutlineAlternateEmail />
            <input
              type="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              tabIndex={3}
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
              tabIndex={4}
            />
          </div>
          <div className="form-input">
            <MdLockOutline />
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              tabIndex={5}
            />
          </div>

          <Link to="/login" className={style.forgotPassword}>
            Já tenho uma conta !
          </Link>

          <button
            type="submit"
            className={style.submitButton}
            disabled={loading}
          >
            {loading ? "Criando conta..." : "Criar Conta"}{" "}
            <IoIosArrowRoundForward />
          </button>
        </form>
      </div>

      <GlobalSnackbar />
    </div>
  );
};

export default RegisterForm;
