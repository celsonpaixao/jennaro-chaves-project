import style from "../style.module.css"

const ReportsSection = () => {
  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>📊 Relatórios e Análises</h2>

      <div className={style.statsGrid}>
        <div className={style.statCard}>
          <div className={style.statNumber}>R$ 15.450</div>
          <div className={style.statLabel}>Vendas do Mês</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>23</div>
          <div className={style.statLabel}>Adoções do Mês</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>18</div>
          <div className={style.statLabel}>Vendas do Mês</div>
        </div>
        <div className={style.statCard}>
          <div className={style.statNumber}>95%</div>
          <div className={style.statLabel}>Taxa de Satisfação</div>
        </div>
      </div>

      <div className={style.actionButtons}>
        <button className={style.primaryButton}>📈 Gerar Relatório Mensal</button>
        <button className={style.secondaryButton}>📅 Relatório Personalizado</button>
        <button className={style.secondaryButton}>📤 Exportar Dados</button>
      </div>

      <div className={style.searchBar}>
        <input type="date" className={style.searchInput} placeholder="Data Inicial" />
        <input type="date" className={style.searchInput} placeholder="Data Final" />
        <select className={style.filterSelect}>
          <option value="">Tipo de Relatório</option>
          <option value="vendas">Vendas</option>
          <option value="adocoes">Adoções</option>
          <option value="estoque">Estoque</option>
          <option value="financeiro">Financeiro</option>
        </select>
      </div>

      <div
        style={{ background: "#f8f9fa", padding: "2rem", borderRadius: "8px", textAlign: "center", marginTop: "2rem" }}
      >
        <h3 style={{ color: "#6c757d", marginBottom: "1rem" }}>📊 Área de Gráficos</h3>
        <p style={{ color: "#6c757d" }}>Aqui serão exibidos os gráficos e análises dos relatórios selecionados</p>
        <div
          style={{
            height: "300px",
            background: "#e9ecef",
            borderRadius: "8px",
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#6c757d", fontSize: "1.2rem" }}>Gráfico será renderizado aqui</span>
        </div>
      </div>
    </div>
  )
}

export default ReportsSection
