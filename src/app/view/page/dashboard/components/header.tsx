import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { useAuthHook } from "../../../../hooks/useAuthHook";
import AppAssetsImages from "../../../../res/app_assets_images";
import style from "../style.module.css";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const { logout, user } = useAuthHook();
  const { goToHome } = useAppNavigation();

  const handleLogout = () => {
    logout();
    goToHome();
  };

  return (
    <header className={style.header}>
      <div className={style.headerTitle}>
        <img src={AppAssetsImages.logo} />
      </div>

      <div className={style.headerUser}>
        <span style={{ fontWeight: 500 }}>
          Bem-vindo, {user?.name || "Usuário"}
        </span>

        <button
          onClick={handleLogout}
          title="Sair"
          style={{
            marginLeft: "12px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <MdLogout size={22} color="#fff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
