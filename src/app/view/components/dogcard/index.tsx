import { Component } from "react";
import DogModel from "../../../model/dog_model";
import styles from "./syule.module.css";
import AppAssetsImages from "../../../res/app_assets_images";

class DogCard extends Component<DogModel> {
  render() {
    const { name, price, description, image, qualification, rating } =
      this.props;

    return (
      <div className={styles.dogCard}>
        <div
          className={styles.dogCardImage}
          style={{ backgroundImage: `url(${image})` }}
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
      </div>
    );
  }
}

export default DogCard;
