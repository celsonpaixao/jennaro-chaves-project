"use client"

import { useState, useEffect } from "react"
import style from "../style.module.css"
import { DogService } from "../../../../data/remote/dog/service"

const AnimalsSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [animals, setAnimals] = useState<any[]>([])

  useEffect(() => {
    DogService.getAll()
      .then((dogs) => {
        // Mapeia os campos da API para os campos esperados pela tabela
        const mapped = dogs.map((dog) => ({
          id: dog.id,
          nome: dog.name,
          especie: "Cão", // ou dog.specie se existir
          raca: dog.raceId || "-", // ajuste conforme seu modelo
          idade: dog.birthDate ? calcularIdade(dog.birthDate) : "-",
          status: dog.status === 1 ? "Disponível" : "Indisponível",
          tipo: dog.commercialTypeId === 1 ? "Venda" : "Adoção",
          preco: dog.price > 0 ? `R$ ${dog.price / 100},00` : "Gratuito",
        }))
        setAnimals(mapped)
      })
      .catch(console.error)
  }, [])

  function calcularIdade(birthDate: string) {
    const nascimento = new Date(birthDate)
    const hoje = new Date()
    let anos = hoje.getFullYear() - nascimento.getFullYear()
    const m = hoje.getMonth() - nascimento.getMonth()
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) anos--
    return anos === 1 ? "1 ano" : `${anos} anos`
  }

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>🐕 Gerenciamento de Animais</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>15</div>
          <div className={style.statLabel}>Total de Animais</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>8</div>
          <div className={style.statLabel}>Disponíveis</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>5</div>
          <div className={style.statLabel}>Adotados</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>2</div>
          <div className={style.statLabel}>Vendidos</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton} onClick={() => setShowModal(true)}>
          ➕ Cadastrar Animal
        </button>
        <button className={style.secondaryButton}>📤 Exportar Lista</button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Buscar por nome, espécie ou raça..." className={style.searchInput} />
        <select className={style.filterSelect}>
          <option value="">Todos os Status</option>
          <option value="disponivel">Disponível</option>
          <option value="adotado">Adotado</option>
          <option value="vendido">Vendido</option>
        </select>
        <select className={style.filterSelect}>
          <option value="">Todas as Espécies</option>
          <option value="cao">Cão</option>
          <option value="gato">Gato</option>
          <option value="passaro">Pássaro</option>
        </select>
      </div>

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
                <button className={`${style.actionButton} ${style.editButton}`}>✏️</button>
                <button className={`${style.actionButton} ${style.deleteButton}`}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h3 className={style.modalTitle}>Cadastrar Novo Animal</h3>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Nome</label>
              <input type="text" className={style.formInput} />
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Espécie</label>
              <select className={style.formInput}>
                <option value="">Selecione...</option>
                <option value="cao">Cão</option>
                <option value="gato">Gato</option>
                <option value="passaro">Pássaro</option>
              </select>
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Raça</label>
              <input type="text" className={style.formInput} />
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Idade</label>
              <input type="text" className={style.formInput} />
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Tipo</label>
              <select className={style.formInput}>
                <option value="">Selecione...</option>
                <option value="adocao">Adoção</option>
                <option value="venda">Venda</option>
              </select>
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Preço</label>
              <input type="text" className={style.formInput} placeholder="Ex: R$ 500,00 ou Gratuito" />
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel}>Descrição</label>
              <textarea className={style.formTextarea} placeholder="Descreva o animal..."></textarea>
            </div>
            <div className={style.modalActions}>
              <button className={style.secondaryButton} onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button className={style.primaryButton}>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnimalsSection
