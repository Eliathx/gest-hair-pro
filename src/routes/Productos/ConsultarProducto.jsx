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
    navigate("/productos/productoConsultado");
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Consultar producto</h2>
        <label>Ingrese el tipo del producto</label>
        <form
          style={{
            display: "flex",
            marginTop: "1rem",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div style={{ gridArea: "tipo" }}>
            <select>
              <option>Cuidado del cabello</option>
              <option>Styling</option>
              <option>Coloración</option>
              <option>Accesorios para el cabello</option>
              <option>Tratamientos capilares especializados</option>
              <option>Productos para barbería</option>
              <option>Productos de higiene y desinfección</option>
              <option>Productos de venta al por menor</option>
            </select>
          </div>
          <input
            style={{ display: "block" }}
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
