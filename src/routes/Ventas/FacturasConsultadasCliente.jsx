import { useState } from "react";
import BotonRegresar from "../../components/BotonRegresar";
function FacturasConsultadasCliente() {
  const [clientHistoryData, setClientHistoryData] = useState([
    {
      nombres: "Eliath Sebastián",
      direccion: "Carcelen",
      date: "2024-03-20",
      serviceType: "Corte",
      amount: "$12.50",
      num: 2,
      cedula: "0750857187",
      valor: 6,
      telf: "099999999",
      description: "Corte de cabello para varón. Semicadete.",
    },
    {
      nombres: "Eliath Sebastián",
      direccion: "Carcelen",
      date: "2024-03-20",
      serviceType: "Corte",
      amount: "$12.50",
      num: 3,
      cedula: "0750857187",
      telf: "099999999",
      valor: 13,
      description: "Corte de cabello para varón. Semicadete.",
    },
    {
      nombres: "Eliath Sebastián",
      direccion: "Carcelen",
      date: "2024-03-20",
      serviceType: "Corte",
      amount: "$12.50",
      num: 4,
      valor: 22,
      cedula: "0750857187",
      telf: "099999999",
      description: "Corte de cabello para varón. Semicadete.",
    },
  ]);

  return (
    <div style={{ margin: "5rem" }}>
      <h2>Facturas emitidas</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {clientHistoryData.map((element) => {
          return (
            <FacturasConsultadasEntry
              nombres={element.nombres}
              date={element.date}
              serviceType={element.serviceType}
              amount={element.amount}
              description={element.description}
              direccion={element.direccion}
              num={element.num}
              telf={element.telf}
              cedula={element.cedula}
              valor={element.valor}
            />
          );
        })}
      </div>
      <BotonRegresar></BotonRegresar>
    </div>
  );
}
export default FacturasConsultadasCliente;

function FacturasConsultadasEntry({
  nombres,
  apellidos,
  cedula,
  direccion,
  num,
  date,
  serviceType,
  telf,
  amount,
  description,
  comentario,
  valor,
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--secondary-bg)",
        padding: "2rem",
        borderRadius: "var(--border-radius)",
      }}
    >
      <form className="addInvoiceEntry">
        <div
          className="formInput"
          style={{ gridArea: "nombre" }}
        >
          <label>Nombres</label>
          <input
            type="text"
            name="name"
            required
            value={nombres}
            disabled
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "apellido" }}
        >
          <label>Apellidos</label>
          <input
            type="text"
            name="apellido"
            required
            disabled
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "cedula" }}
        >
          <label>Cédula</label>
          <input
            type="text"
            maxLength={10}
            id="transactionAmountInput"
            name="cedula"
            disabled
            value={cedula}
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "email" }}
        >
          <label>Correo electrónico</label>
          <input
            type="text"
            name="email"
            required
            disabled
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "Direccion" }}
        >
          <label>Dirección domiciliaria</label>
          <input
            type="text"
            name="Direccion"
            required
            value={direccion}
            disabled
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "telefono" }}
        >
          <label>Teléfono</label>
          <input
            type="text"
            maxLength={10}
            name="Direccion"
            required
            disabled
            value={telf}
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "fechaCaducidad" }}
        >
          <label>Fecha de emisión</label>
          <input
            type="date"
            name="date"
            required
            disabled
            value={"2024-03-20"}
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "number" }}
        >
          <label>Número de factura</label>
          <input
            type="number"
            name="date"
            disabled
            value={num}
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "number" }}
        >
          <label>Número de factura</label>
          <input
            type="number"
            name="date"
            disabled
            value={num}
          />
        </div>

        <div
          style={{ gridArea: "servicio" }}
          className="formInput"
        >
          <label>Servicio</label>
          <select
            style={{ display: "block" }}
            onChange={(e) => onInputChange("servicio", e.target.value)}
            value={serviceType}
            disabled
          >
            <option>Corte</option>
            <option>Peinado</option>
            <option>Tinturado</option>
            <option>Tratamiento</option>
            <option>Venta de producto</option>
          </select>
        </div>
        <div
          style={{ gridArea: "valor" }}
          className="formInput"
        >
          <label>Valor</label>
          <input
            type="number"
            name="name"
            value={valor}
            disabled
            required
            onChange={(e) => onInputChange("value", e.target.value)}
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "comentario" }}
          onChange={(e) => onInputChange("comentario", e.target.value)}
        >
          <label>Comentario (opcional)</label>
          <input
            value={description}
            type="text"
            disabled
            name="comentario"
          />
        </div>
      </form>
    </div>
  );
}
