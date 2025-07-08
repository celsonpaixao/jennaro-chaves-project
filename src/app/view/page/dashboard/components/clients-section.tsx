"use client"

import { useState } from "react"
import style from "../style.module.css"

const ClientsSection = () => {
  const [clients] = useState([
    {
      id: 1,
      nome: "Maria Silva",
      email: "maria@email.com",
      telefone: "(11) 99999-9999",
      interesse: "Adoção",
      animal: "Cão pequeno porte",
    },
    {
      id: 2,
      nome: "João Santos",
      email: "joao@email.com",
      telefone: "(11) 88888-8888",
      interesse: "Compra",
      animal: "Gato Persa",
    },
    {
      id: 3,
      nome: "Ana Costa",
      email: "ana@email.com",
      telefone: "(11) 77777-7777",
      interesse: "Adoção",
      animal: "Qualquer",
    },
  ])

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>👥 Registro de Clientes</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>45</div>
          <div className={style.statLabel}>Total de Clientes</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>28</div>
          <div className={style.statLabel}>Interessados em Adoção</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>17</div>
          <div className={style.statLabel}>Interessados em Compra</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton}>➕ Cadastrar Cliente</button>
        <button className={style.secondaryButton}>📧 Enviar Newsletter</button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Buscar por nome, email ou telefone..." className={style.searchInput} />
        <select className={style.filterSelect}>
          <option value="">Todos os Interesses</option>
          <option value="adocao">Adoção</option>
          <option value="compra">Compra</option>
        </select>
      </div>

      <table className={style.table}>
        <thead className={style.tableHeader}>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Interesse</th>
            <th>Animal Desejado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className={style.tableRow}>
              <td className={style.tableCell}>{client.nome}</td>
              <td className={style.tableCell}>{client.email}</td>
              <td className={style.tableCell}>{client.telefone}</td>
              <td className={style.tableCell}>
                <span
                  className={`${style.statusBadge} ${
                    client.interesse === "Adoção" ? style.statusAdopted : style.statusSold
                  }`}
                >
                  {client.interesse}
                </span>
              </td>
              <td className={style.tableCell}>{client.animal}</td>
              <td className={style.tableCell}>
                <button className={`${style.actionButton} ${style.editButton}`}>✏️</button>
                <button className={`${style.actionButton} ${style.deleteButton}`}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientsSection
