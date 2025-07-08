import style from "../style.module.css"

const HistorySection = () => {
  const history = [
    {
      id: 1,
      cliente: "Maria Silva",
      animal: "Rex",
      tipo: "Adoção",
      data: "15/01/2024",
      valor: "Gratuito",
      status: "Concluído",
    },
    {
      id: 2,
      cliente: "João Santos",
      animal: "Mimi",
      tipo: "Compra",
      data: "14/01/2024",
      valor: "R$ 800,00",
      status: "Concluído",
    },
    {
      id: 3,
      cliente: "Ana Costa",
      animal: "Bob",
      tipo: "Adoção",
      data: "13/01/2024",
      valor: "Gratuito",
      status: "Concluído",
    },
    {
      id: 4,
      cliente: "Pedro Lima",
      animal: "Luna",
      tipo: "Compra",
      data: "12/01/2024",
      valor: "R$ 1.200,00",
      status: "Concluído",
    },
  ]

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>📋 Histórico de Transações</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>127</div>
          <div className={style.statLabel}>Total de Transações</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>78</div>
          <div className={style.statLabel}>Adoções Realizadas</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>49</div>
          <div className={style.statLabel}>Vendas Realizadas</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton}>📊 Relatório Completo</button>
        <button className={style.secondaryButton}>📤 Exportar Histórico</button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Buscar por cliente ou animal..." className={style.searchInput} />
        <select className={style.filterSelect}>
          <option value="">Todos os Tipos</option>
          <option value="adocao">Adoção</option>
          <option value="compra">Compra</option>
        </select>
        <input type="date" className={style.filterSelect} />
      </div>

      <table className={style.table}>
        <thead className={style.tableHeader}>
          <tr>
            <th>Cliente</th>
            <th>Animal</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id} className={style.tableRow}>
              <td className={style.tableCell}>{item.cliente}</td>
              <td className={style.tableCell}>{item.animal}</td>
              <td className={style.tableCell}>
                <span
                  className={`${style.statusBadge} ${item.tipo === "Adoção" ? style.statusAdopted : style.statusSold}`}
                >
                  {item.tipo}
                </span>
              </td>
              <td className={style.tableCell}>{item.data}</td>
              <td className={style.tableCell}>{item.valor}</td>
              <td className={style.tableCell}>
                <span className={`${style.statusBadge} ${style.statusAvailable}`}>{item.status}</span>
              </td>
              <td className={style.tableCell}>
                <button className={`${style.actionButton} ${style.editButton}`}>👁️</button>
                <button className={`${style.actionButton} ${style.deleteButton}`}>📄</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HistorySection
