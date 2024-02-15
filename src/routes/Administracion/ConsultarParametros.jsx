import { useState } from "react";
import BotonRegresar from "../../components/BotonRegresar";
import MensajeConfirmacion from "../../components/MensajeConfirmacion";
const ConsultarParametros = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página
    setModal(true);
  };
  const [modal, setModal] = useState(false);
  return (
    <div>
      <BotonRegresar></BotonRegresar>
      <div
        style={{
          display: "flex",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <h2>Parámetros del sistema</h2>
        <button
          style={{
            height: "fit-content",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height={"1rem"}
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      </div>
      <div>
        <MensajeConfirmacion
          openModal={modal}
          closeModal={() => setModal(false)}
          text="Cliente registrado exitosamente."
        />

        <form
          style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <div style={{ gridArea: "name" }}>
            <label>Porcentaje de IVA</label>
            <input
              name="iva"
              required
              disabled
              value={"12%"}
            />
          </div>

          <div style={{ gridArea: "account" }}>
            <label>Moneda</label>
            <select
              style={{ display: "block", width: "100%" }}
              required
              disabled
            >
              <option>$ Dólar estadounidense (USD)</option>
              <option>€ Euro (EUR)</option>
              <option>£ Libra esterlina (GBP)</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ConsultarParametros;
