import style from "../style.module.css"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerTitle}>🐾 PetShop Dashboard</div>
      <div className={style.headerUser}>
        <span>Bem-vindo, Admin</span>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          👤
        </div>
      </div>
    </header>
  )
}

export default Header
