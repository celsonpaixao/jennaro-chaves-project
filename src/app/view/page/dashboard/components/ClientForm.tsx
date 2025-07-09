"use client";

import { useState } from "react";
import { useAuthHook } from "../../../../hooks/useAuthHook";
import style from "../style.module.css";

interface Props {
  onCancel: () => void;
  onSuccess: () => void;
}

const ClientForm = ({ onCancel, onSuccess }: Props) => {
  const { registerClient, loading } = useAuthHook();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    province: "",
    county: "",
    district: "",
    street: "",
    residenceNumber: "",
    eligibleAdoption: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await registerClient({
        ...formData,
        phone: Number(formData.phone),
        residenceNumber: Number(formData.residenceNumber),
      });

      onSuccess(); // atualizar a lista
    } catch {
      // Erro tratado pelo hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.modalContent}>
      <h3 className={style.modalTitle}>Cadastrar Cliente</h3>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Nome</label>
        <input
          name="name"
          className={style.formInput}
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Sobrenome</label>
        <input
          name="lastname"
          className={style.formInput}
          placeholder="Sobrenome"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Email</label>
        <input
          type="email"
          name="email"
          className={style.formInput}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Telefone</label>
        <input
          name="phone"
          className={style.formInput}
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Província</label>
        <input
          name="province"
          className={style.formInput}
          placeholder="Província"
          value={formData.province}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Município</label>
        <input
          name="county"
          className={style.formInput}
          placeholder="Município"
          value={formData.county}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Distrito</label>
        <input
          name="district"
          className={style.formInput}
          placeholder="Distrito"
          value={formData.district}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Rua</label>
        <input
          name="street"
          className={style.formInput}
          placeholder="Rua"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Número da residência</label>
        <input
          name="residenceNumber"
          type="number"
          className={style.formInput}
          placeholder="Número"
          value={formData.residenceNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label className={style.formLabel}>Interesse</label>
        <select
          name="eligibleAdoption"
          className={style.formInput}
          value={formData.eligibleAdoption ? "true" : "false"}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              eligibleAdoption: e.target.value === "true",
            }))
          }
        >
          <option value="true">Adoção</option>
          <option value="false">Compra</option>
        </select>
      </div>

      <div className={style.modalActions}>
        <button
          type="submit"
          className={style.primaryButton}
          disabled={loading}
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
        <button
          type="button"
          className={style.secondaryButton}
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ClientForm;
