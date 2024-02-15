import { useNavigate } from "react-router-dom";
import BotonRegresar from "../../components/BotonRegresar";
import { useState } from "react";
const ConsultarFacturaCedula = () => {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [validCedula, setValidCedula] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleConsultarClick = (event) => {
    event.preventDefault();
    //Validar formato (10 dígitos)
    const cedulaPattern = /^[0-9]{10}$/;
    const isValidCedula = cedulaPattern.test(cedula);

    if (isValidCedula) {
      if (cedula == "0750857187") {
        navigate("/ventas/facturasConsultadasCliente");
      } else {
        setValidCedula(false);
        setInvalidMessage("Cliente no registrado.");
      }
      //TODO: Validar si cédula es válida en Ecuador
      //Agregar aquí lógica de consulta a base de dato para caso "Cliente no registrado"
    } else {
      setValidCedula(false);
      setInvalidMessage("Cédula no válida.");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Consultar facturas de cliente.</h2>
        <label>Ingrese la cédula de identidad del cliente.</label>
        <form style={{ display: "flex", marginTop: "1rem", gap: "1rem" }}>
          <input
            type="text"
            maxLength={10}
            value={cedula}
            onChange={(e) => {
              setCedula(e.target.value);
              setValidCedula(true);
            }}
            required
          />
          <input
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
export default ConsultarFacturaCedula;
