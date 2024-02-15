import MensajeConfirmacion from "./MensajeConfirmacion";
import { useState } from "react";
const ClientInfo = ({ setIsClientAdded }) => {
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
        text="Cliente registrado exitosamente."
      />

      <form
        className="addClientForm"
        onSubmit={handleSubmit}
      >
        <div style={{ gridArea: "name" }}>
          <label>Nombres</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div style={{ gridArea: "apellidos" }}>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            required
          />
        </div>
        <div style={{ gridArea: "amount" }}>
          <label>Cédula</label>
          <input
            type="text"
            name="amount"
            maxlength="10"
            required
          />
        </div>

        <div style={{ gridArea: "account" }}>
          <label>Dirección domiciliaria</label>
          <input
            required
            type="text"
            name="name"
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "date" }}
        >
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            id="transactionDateInput"
            name="date"
            required
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div style={{ gridArea: "comment" }}>
          <label>Sexo</label>
          <select>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div style={{ gridArea: "estadoCivil" }}>
          <label>Estado civil</label>
          <select>
            <option>Soltero</option>
            <option>Casado</option>
            <option>Divorciado</option>
            <option>Viudo</option>
            <option>Unión de hecho</option>
          </select>
        </div>
        <div
          className="formInput "
          style={{ gridArea: "category" }}
        >
          <label>Teléfono de contacto</label>
          <input
            type="text"
            name="telefono"
            maxlength="10"
            required
          />
        </div>

        <div
          className="formInput commentInputBox"
          style={{ gridArea: "email" }}
        >
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
          />
        </div>
        <input
          style={{ gridArea: "addButton", padding: "1rem " }}
          type="submit"
          value={"Registrar cliente"}
          className="pseudoButton"
        />
        <div style={{ gridArea: "alergias" }}>
          <label>Alergias</label>
          <input
            type="text"
            name="alergias"
          />
        </div>
        <div style={{ gridArea: "enfermedadesCapilares" }}>
          <label>Enfermedades capilares</label>
          <input
            type="text"
            name="enfermedadesCapilares"
          />
        </div>
        <div style={{ gridArea: "preferencias" }}>
          <label>Preferencias en productos</label>
          <input
            type="text"
            name="preferencias"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientInfo;
