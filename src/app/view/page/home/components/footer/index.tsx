import styles from "./style.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import AppAssetsImages from "../../../../../res/app_assets_images";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <img
            src={AppAssetsImages.logo}
            alt="Canil Helkeys"
            className={styles.logo}
          />
          <p className={styles.description}>
            Somos o melhor canil e temos os melhores serviços do mercado, com
            foco na excelência e inovação de modo a satisfazer as necessidades
            de nossos clientes
          </p>
          <div className={styles.socialIcons}>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
            <FaTiktok />
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Localizacao</h4>
          <p>Rua comandante valodia frente à shoprite na entrada da Dira</p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Navegacao</h4>
          <ul className={styles.links}>
            <li>Home</li>
            <li>Nossos serviços</li>
            <li>Comprar</li>
            <li>Adotar</li>
            <li>Home</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <p>+244 933 456 354</p>
          <p>+244 933 456 354</p>
          <p>jennarochaves234@gmail.com</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>2025 canil helkeys, Todos os direitos reservados</p>
        <div className={styles.footerLinks}>
          <a href="#">Políticas de privacidade</a>
          <a href="#">Termos e condições de usos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
