import style from "../style.module.css"

const PaymentsSection = () => {
  const payments = [
    {
      id: 1,
      cliente: "Maria Silva",
      valor: "R$ 800,00",
      metodo: "Cartão de Débito",
      status: "Aprovado",
      data: "15/01/2024",
    },
    {
      id: 2,
      cliente: "João Santos",
      valor: "R$ 150,00",
      metodo: "Transferência",
      status: "Pendente",
      data: "14/01/2024",
    },
    { id: 3, cliente: "Ana Costa", valor: "R$ 0,00", metodo: "Adoção", status: "Concluído", data: "13/01/2024" },
  ]

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>💳 Gerenciamento de Pagamentos</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>R$ 12.350</div>
          <div className={style.statLabel}>Recebido Este Mês</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>R$ 2.100</div>
          <div className={style.statLabel}>Pendente</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>85%</div>
          <div className={style.statLabel}>Taxa de Aprovação</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton}>💰 Registrar Pagamento</button>
        <button className={style.secondaryButton}>📊 Relatório Financeiro</button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Buscar por cliente..." className={style.searchInput} />
        <select className={style.filterSelect}>
          <option value="">Todos os Métodos</option>
          <option value="debito">Cartão de Débito</option>
          <option value="transferencia">Transferência</option>
          <option value="pix">PIX</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
        <select className={style.filterSelect}>
          <option value="">Todos os Status</option>
          <option value="aprovado">Aprovado</option>
          <option value="pendente">Pendente</option>
          <option value="recusado">Recusado</option>
        </select>
      </div>

      <table className={style.table}>
        <thead className={style.tableHeader}>
          <tr>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Método</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className={style.tableRow}>
              <td className={style.tableCell}>{payment.cliente}</td>
              <td className={style.tableCell}>{payment.valor}</td>
              <td className={style.tableCell}>{payment.metodo}</td>
              <td className={style.tableCell}>
                <span
                  className={`${style.statusBadge} ${
                    payment.status === "Aprovado"
                      ? style.statusAvailable
                      : payment.status === "Pendente"
                        ? style.statusSold
                        : style.statusAdopted
                  }`}
                >
                  {payment.status}
                </span>
              </td>
              <td className={style.tableCell}>{payment.data}</td>
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

export default PaymentsSection
