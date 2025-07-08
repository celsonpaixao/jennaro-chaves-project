"use client";

import { useState, useEffect, useRef } from "react";
import style from "../style.module.css";
import {
  CreateDogRequest,
  DogService,
} from "../../../../data/remote/dog/service";
import GlobalSnackbar from "../../../components/global/GlobalSnackbar";
import { useDogHook } from "../../../../hooks/useDogHook";
import DogModel from "../../../../model/dog_model";

const AnimalsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [animals, setAnimals] = useState<any[]>([]);
  const [formData, setFormData] = useState<CreateDogRequest>({
    name: "",
    birthDate: "",
    raceId: 0,
    description: "",
    commercialTypeId: 0,
    price: 0,
    status: 1,
    sex: "M",
    dogSizeId: 1,
  });

  const [editFormData, setEditFormData] = useState<DogModel | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const { createDog, deleteDog, updateDog, uploadImage } = useDogHook();

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const dogs = await DogService.getAll();
      const mapped = dogs.map((dog) => ({
        id: dog.id,
        nome: dog.name,
        especie: "Cão",
        raca: dog.raceId || "-",
        idade: dog.birthDate ? calcularIdade(dog.birthDate) : "-",
        status: dog.status === 1 ? "Disponível" : "Indisponível",
        tipo: dog.commercialTypeId === 2 ? "Venda" : "Adoção",
        preco: dog.price > 0 ? `Kz$ ${dog.price / 100},00` : "Gratuito",
        raw: dog,
      }));
      setAnimals(mapped);
    } catch (err) {
      console.error("Erro ao buscar cães:", err);
    }
  };

  const calcularIdade = (birthDate: string) => {
    const nascimento = new Date(birthDate);
    const hoje = new Date();
    let anos = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) anos--;
    return anos === 1 ? "1 ano" : `${anos} anos`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    isEdit = false
  ) => {
    const { name, value } = e.target;
    const numericFields = [
      "raceId",
      "commercialTypeId",
      "dogSizeId",
      "status",
      "price",
    ];

    const newValue = numericFields.includes(name)
      ? parseInt(value) || 0
      : value;

    if (isEdit && editFormData) {
      setEditFormData({ ...editFormData, [name]: newValue });
    } else {
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const openEditModal = (animal: any) => {
    const dog = animal.raw;
    setEditFormData({
      ...dog,
      birthDate: dog.birthDate.split("T")[0],
    });
    setImagePreview(null);
    setSelectedImageFile(null);
    setEditModal(true);
  };

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>🐕 Gerenciamento de Animais</h2>

      {/* Estatísticas */}
      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>{animals.length}</div>
          <div className={style.statLabel}>Total de Animais</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>
            {animals.filter((a) => a.status === "Disponível").length}
          </div>
          <div className={style.statLabel}>Disponíveis</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>
            {animals.filter((a) => a.status === "Adotado").length}
          </div>
          <div className={style.statLabel}>Adotados</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>
            {animals.filter((a) => a.status === "Vendido").length}
          </div>
          <div className={style.statLabel}>Vendidos</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button
          className={style.primaryButton}
          onClick={() => setShowModal(true)}
        >
          ➕ Cadastrar Animal
        </button>
      </div>

      {/* Tabela */}
      <table className={style.table}>
        <thead className={style.tableHeader}>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id} className={style.tableRow}>
              <td className={style.tableCell}>{animal.nome}</td>
              <td className={style.tableCell}>{animal.especie}</td>
              <td className={style.tableCell}>{animal.raca}</td>
              <td className={style.tableCell}>{animal.idade}</td>
              <td className={style.tableCell}>{animal.tipo}</td>
              <td className={style.tableCell}>{animal.preco}</td>
              <td className={style.tableCell}>
                <span
                  className={`${style.statusBadge} ${
                    animal.status === "Disponível"
                      ? style.statusAvailable
                      : animal.status === "Adotado"
                      ? style.statusAdopted
                      : style.statusSold
                  }`}
                >
                  {animal.status}
                </span>
              </td>
              <td className={style.tableCell}>
                <button
                  className={`${style.actionButton} ${style.editButton}`}
                  onClick={() => openEditModal(animal)}
                >
                  ✏️
                </button>
                <button
                  className={`${style.actionButton} ${style.deleteButton}`}
                  onClick={async () => {
                    await deleteDog(animal.id);
                    fetchDogs();
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Edição */}
      {editModal && editFormData && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h3 className={style.modalTitle}>Editar Animal</h3>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Imagem</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageInputRef}
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className={style.imagePreview}
                />
              ) : (
                editFormData.imageUrl && (
                  <img
                    src={editFormData.imageUrl}
                    alt="Imagem atual"
                    className={style.imagePreview}
                  />
                )
              )}
            </div>
            <FormFields
              data={editFormData}
              onChange={(e) => handleInputChange(e, true)}
            />
            <div className={style.modalActions}>
              <button
                className={style.secondaryButton}
                onClick={() => setEditModal(false)}
              >
                Cancelar
              </button>
              <button
                className={style.primaryButton}
                onClick={async () => {
                  if (editFormData) {
                    await updateDog({
                      ...editFormData,
                      birthDate: new Date(editFormData.birthDate).toISOString(),
                    });
                    if (selectedImageFile && editFormData.id) {
                      await uploadImage(editFormData.id, selectedImageFile);
                    }
                    setEditModal(false);
                    fetchDogs();
                  }
                }}
              >
                Atualizar
              </button>
            </div>
          </div>
        </div>
      )}

      <GlobalSnackbar />
    </div>
  );
};

export default AnimalsSection;

const FormFields = ({
  data,
  onChange,
}: {
  data: any;
  onChange: (e: any) => void;
}) => (
  <>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Nome</label>
      <input
        type="text"
        name="name"
        className={style.formInput}
        value={data.name}
        onChange={onChange}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Nascimento</label>
      <input
        type="date"
        name="birthDate"
        className={style.formInput}
        value={data.birthDate}
        onChange={onChange}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Raça</label>
      <input
        type="number"
        name="raceId"
        className={style.formInput}
        value={data.raceId}
        onChange={onChange}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Tipo</label>
      <select
        name="commercialTypeId"
        className={style.formInput}
        value={data.commercialTypeId}
        onChange={onChange}
      >
        <option value="1">Adoção</option>
        <option value="2">Venda</option>
      </select>
    </div>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Tamanho</label>
      <select
        name="dogSizeId"
        className={style.formInput}
        value={data.dogSizeId}
        onChange={onChange}
      >
        <option value="1">Pequeno</option>
        <option value="2">Médio</option>
        <option value="3">Grande</option>
      </select>
    </div>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Preço</label>
      <input
        type="text"
        name="price"
        className={style.formInput}
        value={data.price}
        onChange={onChange}
      />
    </div>
    <div className={style.formGroup}>
      <label className={style.formLabel}>Descrição</label>
      <textarea
        name="description"
        className={style.formTextarea}
        value={data.description}
        onChange={onChange}
      ></textarea>
    </div>
  </>
);
