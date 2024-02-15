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
        className="formInput"
        style={{ gridArea: "entry" }}
      >
        <label>Servicio</label>
        <select onChange={(e) => onInputChange("servicio", e.target.value)}>
          <option>Corte</option>
          <option>Peinado</option>
          <option>Tinturado</option>
          <option>Tratamiento</option>
          <option>Venta de producto</option>
        </select>
      </div>
      <div
        className="formInput"
        style={{ gridArea: "entry2" }}
      >
        <label>Valor</label>
        <input
          type="number"
          name="name"
          required
          onChange={(e) => onInputChange("value", e.target.value)}
        />
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
        <div
          style={{
            gridArea: "addEntry",
            border: "2px dashed gray",
            padding: "1rem",
            textAlign: "center",
          }}
          onClick={handleAddItem}
        >
          Agregar item
        </div>
        <div style={{ gridArea: "valorTotal" }}>
          <label>Total</label>
          <input
            type="number"
            name="date"
            disabled
            value={getTotal(facturaItems)}
          />
        </div>
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
export default EmitirFactura;
