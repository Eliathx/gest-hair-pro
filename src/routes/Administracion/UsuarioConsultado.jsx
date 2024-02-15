import { useState } from "react";
import BotonRegresar from "../../components/BotonRegresar";
import MensajeConfirmacion from "../../components/MensajeConfirmacion";
export default function UsuarioConsultado() {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Usuario</h2>
        <button>
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
      <form
        style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div style={{ gridArea: "name" }}>
          <label>Nombre de usuario</label>
          <input
            name="name"
            value="Linda"
            required
            disabled
          />
        </div>

        <div style={{ gridArea: "account" }}>
          <label>Contraseña</label>
          <input
            name="password"
            required
            type="password"
            value="12345"
            disabled
          />
        </div>
      </form>
      <BotonRegresar></BotonRegresar>
    </div>
  );
}
