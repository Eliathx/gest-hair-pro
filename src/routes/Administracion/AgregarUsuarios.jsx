import { useState } from "react";
import BotonRegresar from "../../components/BotonRegresar";
import MensajeConfirmacion from "../../components/MensajeConfirmacion";

export default function AgregarUsuarios() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página
    setModal(true);
  };
  const [modal, setModal] = useState(false);
  return (
    <div>
      <MensajeConfirmacion
        openModal={modal}
        closeModal={() => setModal(false)}
        text="Usuario agregado exitosamente."
      />
      <h2>Agregar usuario</h2>
      <form
        style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div style={{ gridArea: "name" }}>
          <label>Nombre de usuario</label>
          <input
            name="name"
            required
          />
        </div>

        <div style={{ gridArea: "account" }}>
          <label>Contraseña</label>
          <input
            name="password"
            required
            type="password"
          />
        </div>
        <input
          type="submit"
          className="pseudoButton"
          value="Agregar usuario"
        ></input>
      </form>
      <BotonRegresar></BotonRegresar>
    </div>
  );
}
