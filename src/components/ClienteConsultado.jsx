import { useState, useEffect } from "react";
import MensajeConfirmacion from "./MensajeConfirmacion";
import { Link } from "react-router-dom";

const ClienteConsultado = ({
  nombres: initialNombres,
  apellidos: initialApellidos,
  telefono: initialTelefono,
  email: initialEmail,
  estadoCivil: initialEstadoCivil,
  fechaNacimiento: initialFechaNacimiento,
  alergias: initialAlergias,
  enfermedadesCapilares: initialEnfermedadesCapilares,
  cedula: initialCedula,
  direccion: initialDireccion,
  sexo: initialSexo,
  preferencias: initialPreferencias,
  estado: initialEstado,
}) => {
  const [formData, setFormData] = useState({
    nombres: initialNombres,
    apellidos: initialApellidos,
    telefono: initialTelefono,
    email: initialEmail,
    estadoCivil: initialEstadoCivil,
    estado: initialEstado,
    fechaNacimiento: initialFechaNacimiento,
    alergias: initialAlergias,
    enfermedadesCapilares: initialEnfermedadesCapilares,
    cedula: initialCedula,
    direccion: initialDireccion,
    sexo: initialSexo,
    preferencias: initialPreferencias,
  });

  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmit = (event) => {
    setModalText("Datos del cliente han sido actualizados correctamente.");
    setModal(true);
    event.preventDefault();
    setIsEditMode(false);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".editable-input");
    inputs.forEach((input) => {
      input.disabled = !isEditMode;
    });
  }, [isEditMode]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <MensajeConfirmacion
        openModal={modal}
        closeModal={() => setModal(false)}
        text={modalText}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Cliente</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link to="/clientes/historial">
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
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </Link>
          <button onClick={handleEditClick}>
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
      </div>
      <form
        className="queriedClientForm"
        onSubmit={handleSubmit}
      >
        <div style={{ gridArea: "name" }}>
          <label>Nombres</label>
          <input
            id="nameInput"
            type="text"
            name="nombres"
            value={formData.nombres}
            disabled
            required
          />
        </div>
        <div style={{ gridArea: "apellidos" }}>
          <label>Apellidos</label>
          <input
            type="text"
            id="apellidosInput"
            name="apellidos"
            value={formData.apellidos}
            disabled
            required
          />
        </div>
        <div style={{ gridArea: "amount" }}>
          <label>Cédula</label>
          <input
            type="text"
            name="cedula"
            value={formData.cedula}
            disabled
            required
          />
        </div>

        <div style={{ gridArea: "account" }}>
          <label>Dirección domiciliaria</label>
          <input
            required
            disabled={!isEditMode}
            type="text"
            name="direccion"
            onChange={handleInputChange}
            value={formData.direccion}
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
            value={formData.fechaNacimiento}
            disabled
          />
        </div>
        <div style={{ gridArea: "comment" }}>
          <label>Sexo</label>
          <select
            disabled
            value={formData.sexo}
          >
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div style={{ gridArea: "estadoCivil" }}>
          <label>Estado civil</label>
          <select
            disabled={!isEditMode}
            value={formData.estadoCivil}
            name={"estadoCivil"}
            onChange={handleInputChange}
          >
            <option>Soltero</option>
            <option>Casado</option>
            <option>Divorciado</option>
            <option>Viudo</option>
            <option>Unión de hecho</option>
          </select>
        </div>
        <div style={{ gridArea: "estado" }}>
          <label>Estado</label>
          <select
            disabled={!isEditMode}
            value={formData.estado}
            name={"estado"}
            onChange={handleInputChange}
          >
            <option>Activo</option>
            <option>Inactivo</option>
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
            value={formData.telefono}
            onChange={handleInputChange}
            maxLength="10"
            required
            disabled={!isEditMode}
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
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={!isEditMode}
          />
        </div>

        <div style={{ gridArea: "alergias" }}>
          <label>Alergias</label>
          <input
            type="text"
            name="alergias"
            value={formData.alergias}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div style={{ gridArea: "enfermedadesCapilares" }}>
          <label>Enfermedades capilares</label>
          <input
            type="text"
            name="enfermedadesCapilares"
            value={formData.enfermedadesCapilares}
            onChange={handleInputChange}
            disabled={!isEditMode}
          />
        </div>
        <div style={{ gridArea: "preferencias" }}>
          <label>Preferencias en productos</label>
          <input
            type="text"
            name="preferencias"
            value={formData.preferencias}
            disabled={!isEditMode}
            onChange={handleInputChange}
          />
        </div>

        {isEditMode ? (
          <input
            style={{ gridArea: "addButton", padding: "1rem " }}
            type="submit"
            value={"Guardar cambios"}
            className="pseudoButton"
          />
        ) : null}
      </form>
    </div>
  );
};

export default ClienteConsultado;
