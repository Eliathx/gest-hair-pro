import { useState } from "react";
import BotonRegresar from "../../components/BotonRegresar";
import MensajeConfirmacion from "../../components/MensajeConfirmacion";

const RegistrarProducto = () => {
  const handleSubmit = (event) => {
    setModal(true);

    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página
  };
  const [modal, setModal] = useState(false);

  return (
    <div style={{ margin: "0 10rem" }}>
      <MensajeConfirmacion
        openModal={modal}
        closeModal={() => setModal(false)}
        text="Producto registrado exitosamente."
      />
      <h2>Registrar nuevo producto</h2>
      <form
        className="addProductForm"
        onSubmit={handleSubmit}
      >
        <div style={{ gridArea: "nombre" }}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>

        <div style={{ gridArea: "precio" }}>
          <label>Precio</label>
          <input
            type="number"
            step=".01"
            id="transactionAmountInput"
            name="amount"
          />
        </div>

        <div style={{ gridArea: "tipo" }}>
          <label>Tipo</label>
          <input
            required
            type="text"
            name="name"
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "fechaCaducidad" }}
        >
          <label>Fecha de caducidad</label>
          <input
            type="date"
            id="transactionDateInput"
            name="date"
            required
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div style={{ gridArea: "estado" }}>
          <label>Estado</label>
          <select>
            <option>Buen estado</option>
            <option>Mal estado</option>
          </select>
        </div>

        <input
          style={{ gridArea: "addButton", padding: "1rem " }}
          type="submit"
          value={"Registrar producto"}
          className="pseudoButton"
        />
      </form>
      <BotonRegresar></BotonRegresar>
    </div>
  );
};
export default RegistrarProducto;
