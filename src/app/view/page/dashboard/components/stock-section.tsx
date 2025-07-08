import style from "../style.module.css"

const StockSection = () => {
  const products = [
    {
      id: 1,
      nome: "Ração Premium Cães",
      categoria: "Alimentação",
      quantidade: 50,
      preco: "R$ 89,90",
      status: "Em Estoque",
    },
    {
      id: 2,
      nome: "Coleira Antipulgas",
      categoria: "Acessórios",
      quantidade: 5,
      preco: "R$ 25,00",
      status: "Estoque Baixo",
    },
    {
      id: 3,
      nome: "Brinquedo Mordedor",
      categoria: "Brinquedos",
      quantidade: 0,
      preco: "R$ 15,90",
      status: "Sem Estoque",
    },
  ]

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>📦 Controle de Estoque</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>156</div>
          <div className={style.statLabel}>Total de Produtos</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>12</div>
          <div className={style.statLabel}>Estoque Baixo</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>3</div>
          <div className={style.statLabel}>Sem Estoque</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton}>➕ Adicionar Produto</button>
        <button className={style.secondaryButton}>📋 Relatório de Estoque</button>
      </div>

      <div className={style.searchBar}>
        <input type="text" placeholder="Buscar produtos..." className={style.searchInput} />
        <select className={style.filterSelect}>
          <option value="">Todas as Categorias</option>
          <option value="alimentacao">Alimentação</option>
          <option value="acessorios">Acessórios</option>
          <option value="brinquedos">Brinquedos</option>
          <option value="higiene">Higiene</option>
        </select>
      </div>

      <table className={style.table}>
        <thead className={style.tableHeader}>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className={style.tableRow}>
              <td className={style.tableCell}>{product.nome}</td>
              <td className={style.tableCell}>{product.categoria}</td>
              <td className={style.tableCell}>{product.quantidade}</td>
              <td className={style.tableCell}>{product.preco}</td>
              <td className={style.tableCell}>
                <span
                  className={`${style.statusBadge} ${
                    product.status === "Em Estoque"
                      ? style.statusAvailable
                      : product.status === "Estoque Baixo"
                        ? style.statusSold
                        : style.statusAdopted
                  }`}
                >
                  {product.status}
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
    </div>
  )
}

export default StockSection
