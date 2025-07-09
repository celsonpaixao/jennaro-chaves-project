import React from "react";
import styles from "./style.module.css";
// import AppAssetsImages from "../../../res/app_assets_images";
type Review = {
  userImage: string;
  userName: string;
  comment: string;
  rating: number;
};

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const renderStars = (rating: number) => {
    return (
      <div className={styles.stars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < rating ? styles.starFilled : styles.starEmpty}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <img
        src={review.userImage}
        alt={review.userName}
        className={styles.avatar}
      />
      <p className={styles.name}>{review.userName}</p>

      <p className={styles.comment}>
        {/* <span>
          <img src={AppAssetsImages.demarquerup} alt="" />
        </span> */}
        {review.comment}
        {/* <span>
          <img src={AppAssetsImages.demarquerdown} alt="" />
        </span> */}
      </p>
      {renderStars(review.rating)}
    </div>
  );
};
