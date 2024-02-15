import { useEffect, useState } from "react";
import BotonRegresar from "../../components/BotonRegresar";
import MensajeConfirmacion from "../../components/MensajeConfirmacion";
import getTotal from "../../utils/getTotal";

const FacturaItemComponent = ({
  onInputChange,
  servicio,
  value,
  comentario,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="formInput">
          <label>Servicio</label>
          <select
            style={{ display: "block" }}
            onChange={(e) => onInputChange("servicio", e.target.value)}
          >
            <option>Corte</option>
            <option>Peinado</option>
            <option>Tinturado</option>
            <option>Tratamiento</option>
            <option>Venta de producto</option>
          </select>
        </div>
        <div className="formInput">
          <label>Valor</label>
          <input
            type="number"
            name="name"
            required
            onChange={(e) => onInputChange("value", e.target.value)}
          />
        </div>
      </div>
      <div
        className="formInput"
        style={{ gridArea: "comentario" }}
        onChange={(e) => onInputChange("comentario", e.target.value)}
      >
        <label>Comentario (opcional)</label>
        <input
          type="text"
          name="comentario"
        />
      </div>
    </>
  );
};

const EmitirFactura = () => {
  const [facturaItems, setFacturaItems] = useState([
    {
      servicio: "Corte",
      value: 0,
      comentario: "Corte para joven varón, militar.",
    },
  ]);
  const [newItem, setNewItem] = useState({
    servicio: "",
    value: "",
    comentario: "",
  });
  useEffect(() => {}, [facturaItems, newItem]);
  const handleInputChange = (field, value) => {
    setNewItem((prevItem) => ({ ...prevItem, [field]: value }));
  };

  const handleAddItem = () => {
    setFacturaItems((prevItems) => [...prevItems, newItem]);
    setNewItem({ servicio: "Corte", value: "", comentario: "" });
  };

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
        text="Factura emitida exitosamente."
      />
      <h2>Emitir factura</h2>
      <form
        className="addInvoiceForm"
        onSubmit={handleSubmit}
      >
        <div
          className="formInput"
          style={{ gridArea: "nombre" }}
        >
          <label>Nombres</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "apellido" }}
        >
          <label>Apellidos</label>
          <input
            type="text"
            name="apellido"
            required
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "cedula" }}
        >
          <label>Cédula</label>
          <input
            type="text"
            maxLength={10}
            id="transactionAmountInput"
            name="cedula"
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "email" }}
        >
          <label>Correo electrónico</label>
          <input
            type="text"
            name="email"
            required
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "Direccion" }}
        >
          <label>Dirección domiciliaria</label>
          <input
            type="text"
            name="Direccion"
            required
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "telefono" }}
        >
          <label>Teléfono</label>
          <input
            type="text"
            maxLength={10}
            name="Direccion"
            required
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "fechaCaducidad" }}
        >
          <label>Fecha de emisión</label>
          <input
            type="date"
            name="date"
            required
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div
          className="formInput"
          style={{ gridArea: "number" }}
        >
          <label>Número de factura</label>
          <input
            type="number"
            name="date"
            disabled
            value={3}
          />
        </div>
      </form>
      <div className="facturasContainer">
        {facturaItems.map((element) => {
          return (
            <FacturaItemComponent
              onInputChange={handleInputChange}
              servicio={element.servicio}
              value={element.value}
              comentario={element.comentario}
            ></FacturaItemComponent>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1.5rem",
          margin: "1.5rem 0",
        }}
      >
        <div>
          <label>IVA</label>
          <input
            type="number"
            name="date"
            disabled
            value={4.08}
          />
        </div>
        <div>
          <label>Total</label>
          <input
            type="number"
            name="date"
            disabled
            value={34}
          />
        </div>
      </div>
      <div
        style={{
          gridArea: "addEntry",
          border: "2px dashed gray",
          padding: "1rem",
          textAlign: "center",
          width: "30%",
          margin: "0 auto",
          marginBottom: "1.5rem",
        }}
        onClick={handleAddItem}
      >
        Agregar item
      </div>
      <button
        style={{
          gridArea: "addButton",
          display: "flex",
          margin: "0 auto",
          padding: "1rem ",
        }}
        onClick={handleSubmit}
        className="pseudoButton"
      >
        Emitir factura
      </button>

      <BotonRegresar></BotonRegresar>
    </div>
  );
};
export default EmitirFactura;
