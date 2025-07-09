import style from "../style.module.css"

const DocumentsSection = () => {
  const documents = [
    {
      id: 1,
      tipo: "Comprovante de Adoção",
      cliente: "Maria Silva",
      animal: "Rex",
      data: "15/01/2024",
      status: "Emitido",
    },
    { id: 2, tipo: "Nota Fiscal", cliente: "João Santos", animal: "Mimi", data: "14/01/2024", status: "Emitido" },
    {
      id: 3,
      tipo: "Comprovante de Adoção",
      cliente: "Ana Costa",
      animal: "Bob",
      data: "13/01/2024",
      status: "Pendente",
    },
  ]

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>📄 Emissão de Documentos</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>156</div>
          <div className={style.statLabel}>Documentos Emitidos</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>89</div>
          <div className={style.statLabel}>Notas Fiscais</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>67</div>
          <div className={style.statLabel}>Comprovantes de Adoção</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton}>📄 Novo Documento</button>
        <button className={style.secondaryButton}>🖨️ Imprimir em Lote</button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Buscar por cliente ou animal..." className={style.searchInput} />
        <select className={style.filterSelect}>
          <option value="">Todos os Tipos</option>
          <option value="nota-fiscal">Nota Fiscal</option>
          <option value="comprovante-adocao">Comprovante de Adoção</option>
          <option value="contrato">Contrato</option>
        </select>
      </div>

      <table className={style.table}>
        <thead className={style.tableHeader}>
          <tr>
            <th>Tipo</th>
            <th>Cliente</th>
            <th>Animal</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className={style.tableRow}>
              <td className={style.tableCell}>{doc.tipo}</td>
              <td className={style.tableCell}>{doc.cliente}</td>
              <td className={style.tableCell}>{doc.animal}</td>
              <td className={style.tableCell}>{doc.data}</td>
              <td className={style.tableCell}>
                <span
                  className={`${style.statusBadge} ${
                    doc.status === "Emitido" ? style.statusAvailable : style.statusSold
                  }`}
                >
                  {doc.status}
                </span>
              </td>
              <td className={style.tableCell}>
                <button className={`${style.actionButton} ${style.editButton}`}>👁️</button>
                <button className={`${style.actionButton} ${style.deleteButton}`}>🖨️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DocumentsSection
