"use client"

import style from "../style.module.css"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const menuItems = [
    { id: "animals", label: "Animais", icon: "🐕" },
    { id: "clients", label: "Clientes", icon: "👥" },
    { id: "stock", label: "Estoque", icon: "📦" },
    { id: "reports", label: "Relatórios", icon: "📊" },
    { id: "payments", label: "Pagamentos", icon: "💳" },
    { id: "documents", label: "Documentos", icon: "📄" },
    { id: "history", label: "Histórico", icon: "📋" },
  ]

  return (
    <nav className={style.sidebar}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`${style.sidebarItem} ${activeSection === item.id ? style.sidebarItemActive : ""}`}
          onClick={() => setActiveSection(item.id)}
        >
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default Sidebar
