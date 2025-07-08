"use client";

import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import AnimalsSection from "./components/animals-section";
import ClientsSection from "./components/clients-section";
import StockSection from "./components/stock-section";
import ReportsSection from "./components/reports-section";
import PaymentsSection from "./components/payments-section";
import DocumentsSection from "./components/documents-section";
import HistorySection from "./components/history-section";
import style from "./style.module.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("animals");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "animals":
        return <AnimalsSection />;
      case "clients":
        return <ClientsSection />;
      case "stock":
        return <StockSection />;
      case "reports":
        return <ReportsSection />;
      case "payments":
        return <PaymentsSection />;
      case "documents":
        return <DocumentsSection />;
      case "history":
        return <HistorySection />;
      default:
        return <AnimalsSection />;
    }
  };

  return (
    <div className={style.container}>
      <Header />
      <div className={style.mainContent}>
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className={style.contentArea}>{renderActiveSection()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
