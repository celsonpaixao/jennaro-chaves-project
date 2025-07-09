"use client";
import ClientForm from "./ClientForm";
import { useEffect, useMemo, useState } from "react";
import style from "../style.module.css";
import { useClientHook } from "../../../../hooks/useClientHook";
import GlobalSnackbar from "../../../components/global/GlobalSnackbar";

const ClientsSection = () => {
  const { clients, fetchClients, loading } = useClientHook();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesFilter =
        !filter ||
        (filter === "adocao" && client.eligibleAdoption) ||
        (filter === "compra" && !client.eligibleAdoption);

      const matchesSearch =
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.email.toLowerCase().includes(search.toLowerCase()) ||
        client.phone.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [clients, filter, search]);

  const total = clients.length;
  const adotantes = clients.filter((c) => c.eligibleAdoption).length;
  const compradores = total - adotantes;

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>👥 Registro de Clientes</h2>

      {/* ✅ Modal com formulário */}
      {showForm && (
        <div className={style.modal}>
          <ClientForm
            onCancel={() => setShowForm(false)}
            onSuccess={() => {
              fetchClients();
              setShowForm(false);
            }}
          />
        </div>
      )}

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>{total}</div>
          <div className={style.statLabel}>Total de Clientes</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>{adotantes}</div>
          <div className={style.statLabel}>Interessados em Adoção</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>{compradores}</div>
          <div className={style.statLabel}>Interessados em Compra</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button
          className={style.primaryButton}
          onClick={() => setShowForm(true)}
        >
          ➕ Cadastrar Cliente
        </button>
        <button className={style.secondaryButton}>📧 Enviar Newsletter</button>
      </div>

      <div className={style.searchBar}>
        <input
          type="text"
          placeholder="Buscar por nome, email ou telefone..."
          className={style.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={style.filterSelect}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Todos os Interesses</option>
          <option value="adocao">Adoção</option>
          <option value="compra">Compra</option>
        </select>
      </div>

      {loading ? (
        <p>🔄 Carregando clientes...</p>
      ) : (
        <table className={style.table}>
          <thead className={style.tableHeader}>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Interesse</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id} className={style.tableRow}>
                <td className={style.tableCell}>{client.name}</td>
                <td className={style.tableCell}>{client.email}</td>
                <td className={style.tableCell}>{client.phone}</td>
                <td className={style.tableCell}>
                  <span
                    className={`${style.statusBadge} ${
                      client.eligibleAdoption
                        ? style.statusAdopted
                        : style.statusSold
                    }`}
                  >
                    {client.eligibleAdoption ? "Adoção" : "Compra"}
                  </span>
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <GlobalSnackbar />
    </div>
  );
};

export default ClientsSection;
