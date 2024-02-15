import { useState } from "react";

function ClientHistoryPage() {
  const [clientHistoryData, setClientHistoryData] = useState([
    {
      date: "2024-03-20",
      serviceType: "Corte",
      amount: "$12.50",
      description: "Corte de cabello para varón. Semicadete.",
    },
    {
      date: "2023-12-13",
      serviceType: "Tintura",
      amount: "$26.00",
      description: "Tinturado rojo",
    },
  ]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Historial</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {clientHistoryData.map((element) => {
          return (
            <ClientHistoryEntry
              date={element.date}
              serviceType={element.serviceType}
              amount={element.amount}
              description={element.description}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ClientHistoryPage;

function ClientHistoryEntry({ date, serviceType, amount, description }) {
  return (
    <div>
      <p>{date}</p>
      <div
        style={{
          backgroundColor: "var(--secondary-bg)",
          borderRadius: "var(--border-radius)",
          padding: "0 1rem 1.25rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{serviceType}</h3>
          <h3>{amount}</h3>
        </div>
        {description}
      </div>
    </div>
  );
}
