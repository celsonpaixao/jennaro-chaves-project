import { Component } from "react";
import DogModel from "../../../model/dog_model";
import styles from "./syule.module.css";
import AppAssetsImages from "../../../res/app_assets_images";

class DogCard extends Component<DogModel> {
  render() {
    const { name, price, description, photo, qualification, rating } =
      this.props;

    return (
      <div className={styles.dogCard}>
        <div
          className={styles.dogCardImage}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>

        <div className={styles.dogCardHeader}>
          <p className={styles.dogCardName}>{name}</p>
          <p className={styles.dogCardPrice}>{`${price} kz`}</p>
        </div>

        <p className={styles.dogCardDescription}>{description}</p>

        <div className={styles.dogCardHeader}>
          <div className={styles.dogCardHeadercontant}>
            <img src={AppAssetsImages.star7} alt="" />
            <p className={styles.dogCardRating}>{rating}</p>
          </div>

          <div className={styles.dogCardHeadercontant}>
            <p className={styles.dogCardQualification}>{qualification}</p>
            <img src={AppAssetsImages.qualitity_icon} alt="" />
          </div>
        </div>

        {/* Botão "Contactar" que aparece no hover */}
        <button
          className={styles.contactButton}
          onClick={() => {
            const number = "244938149766";
            const message = `Olá, tenho interesse no cão ${name} por ${price} kz. Ainda está disponível?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${number}?text=${encodedMessage}`;
            window.open(whatsappURL, "_blank");
          }}
        >
          Contactar
        </button>
      </div>
    );
  }
}

export default DogCard;
