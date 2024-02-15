import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonRegresar from "../../components/BotonRegresar";

const ConsultarProducto = () => {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [validCedula, setValidCedula] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleConsultarClick = (event) => {
    event.preventDefault();
    //Validar formato (10 dígitos)
    const cedulaPattern = /^[aA-zZ]$/;
    const isValidCedula = cedulaPattern.test(cedula);

    if (isValidCedula) {
      if (cedula == "0750857187") {
        navigate("/clientes/clienteConsultado");
      } else {
        setValidCedula(false);
        setInvalidMessage("Producto no registrado.");
      }
    } else {
      setValidCedula(false);
      setInvalidMessage("Ingreso no válida.");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Consultar producto</h2>
        <label>Ingrese el tipo del producto</label>
        <form style={{ display: "flex", marginTop: "1rem", gap: "1rem" }}>
          <input
            type="text"
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

export default ConsultarProducto;
