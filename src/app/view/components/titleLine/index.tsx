import React from "react";
import style from "./style.module.css";
import AppAssetsImages from "../../../res/app_assets_images"; // Imagem fixa

interface SectionTitleProps {
  title: string;
  fontSize?: string;
  color?: string;
  lineWidth?: number;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  fontSize = "20px",
  color = "#333",
  align = "center",
  lineWidth = "200px",
}) => {
  return (
    <div className={style.container} style={{ textAlign: align }}>
      <p className={style.title} style={{ fontSize, color }}>
        {title}
      </p>
      <img
        className={style.line}
        style={{ width: lineWidth }}
        src={AppAssetsImages.line3}
        alt="Linha decorativa"
      />
    </div>
  );
};

export default SectionTitle;
