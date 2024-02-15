import { useNavigate } from "react-router-dom";
import BotonRegresar from "../../components/BotonRegresar";
import { useState } from "react";
const ConsultarFacturaFechas = () => {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [validCedula, setValidCedula] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleConsultarClick = (event) => {
    event.preventDefault();
    //Validar formato (10 dígitos)
    const cedulaPattern = /^[0-9]{10}$/;
    const isValidCedula = cedulaPattern.test(cedula);

    navigate("/ventas/facturasConsultadas");
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Consultar facturas por fecha.</h2>
        <label>Ingrese el rango de fechas para consultar facturas.</label>
        <form style={{ margin: "1.5rem" }}>
          <div
            style={{ display: "flex", marginBottom: "1.5rem", gap: "1.5rem" }}
          >
            <div>
              <label>Fecha inicial</label>

              <input
                type="date"
                required
              />
            </div>
            <div>
              <label>Fecha final</label>

              <input
                type="date"
                required
              />
            </div>
          </div>
          <input
            style={{ width: "50%" }}
            className="pseudoButton"
            type="submit"
            onClick={handleConsultarClick}
            value="Consultar"
          ></input>
        </form>
        {!validCedula && (
          <p style={{ color: "var(--red)" }}>{invalidMessage}</p>
        )}
      </div>
      <BotonRegresar></BotonRegresar>
    </div>
  );
};
export default ConsultarFacturaFechas;
