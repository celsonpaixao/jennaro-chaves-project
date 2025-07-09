"use client";

import style from "../style.module.css";
import DogModel from "../../../../model/dog_model";

interface Props {
  dog: DogModel | null;
  onClose: () => void;
}

export default function DogDetailsModal({ dog, onClose }: Props) {
  if (!dog) return null;

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h3 className={style.modalTitle}>Detalhes do Cão</h3>
        <div className={style.formGroup}>
          <strong>Nome:</strong> {dog.name}
        </div>
        <div className={style.formGroup}>
          <strong>Raça:</strong> {dog.raceId}
        </div>
        <div className={style.formGroup}>
          <strong>Tipo:</strong>{" "}
          {dog.commercialTypeId === 1 ? "Venda" : "Adoção"}
        </div>
        <div className={style.formGroup}>
          <strong>Tamanho:</strong> {dog.dogSizeId}
        </div>
        <div className={style.formGroup}>
          <strong>Data de Nascimento:</strong>{" "}
          {new Date(dog.birthDate).toLocaleDateString()}
        </div>
        <div className={style.formGroup}>
          <strong>Sexo:</strong> {dog.sex === "M" ? "Macho" : "Fêmea"}
        </div>
        <div className={style.formGroup}>
          <strong>Status:</strong>{" "}
          {dog.status === 1 ? "Disponível" : "Indisponível"}
        </div>
        <div className={style.formGroup}>
          <strong>Descrição:</strong> {dog.description}
        </div>
        <div className={style.formGroup}>
          <strong>Preço:</strong>{" "}
          {dog.price > 0 ? `Kz$ ${dog.price / 100},00` : "Gratuito"}
        </div>

        <div className={style.modalActions}>
          <button className={style.secondaryButton} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
