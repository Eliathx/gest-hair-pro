import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonRegresar from "../../components/BotonRegresar";

const ConsultarUsuario = () => {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [validCedula, setValidCedula] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleConsultarClick = (event) => {
    event.preventDefault();
    //Validar formato (10 dígitos)
    setValidCedula(true);
    if (cedula == "Linda") {
      navigate("/administracion/usuarioConsultado");
    } else {
      setValidCedula(false);
      setInvalidMessage("Usuario no registrado.");
    }
    //TODO: Validar si cédula es válida en Ecuador
    //Agregar aquí lógica de consulta a base de dato para caso "Cliente no registrado"
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Consultar usuario</h2>
        <label>Ingrese el nombre de usuario.</label>
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

export default ConsultarUsuario;
