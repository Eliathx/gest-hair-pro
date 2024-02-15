import BotonRegresar from "../../components/BotonRegresar";

const ProductoConsultado = () => {
  const productos = [
    {
      nombre: "Gel",
      tipo: "Cuidado del cabello",
      valor: "3.35",
      estado: "Buen estado",
    },
    {
      nombre: "Gel2",
      tipo: "Cuidado del cabello",
      valor: "6.35",
      estado: "Mal estado",
    },
    {
      nombre: "Gel3",
      tipo: "Cuidado del cabello",
      valor: "9.35",
      estado: "Mal estado",
    },
  ];

  return (
    <div style={{ margin: "4rem 8rem" }}>
      <h2>Productos de Cuidado del cabello.</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {productos.map((element) => {
          <ProductoConsultadoEntry></ProductoConsultadoEntry>;
          return (
            <ProductoConsultadoEntry
              valor={element.valor}
              nombre={element.nombre}
              tipo={element.tipo}
              estado={element.estado}
            ></ProductoConsultadoEntry>
          );
        })}
      </div>

      <BotonRegresar></BotonRegresar>
    </div>
  );
};

const ProductoConsultadoEntry = ({ valor, nombre, estado, tipo }) => {
  return (
    <form
      style={{
        backgroundColor: "var(--secondary-bg)",
        padding: "1rem",
        borderRadius: "var(--border-radius)",
      }}
      className="addProductForm"
    >
      <div style={{ gridArea: "nombre" }}>
        <label>Nombre</label>
        <input
          value={nombre}
          disabled
          type="text"
          name="name"
          required
        />
      </div>

      <div style={{ gridArea: "precio" }}>
        <label>Precio</label>
        <input
          value={valor}
          disabled
          type="number"
          step=".01"
          id="transactionAmountInput"
          name="amount"
        />
      </div>

      <div style={{ gridArea: "tipo" }}>
        <label>Tipo</label>
        <select
          disabled
          value={tipo}
        >
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
      <div
        className="formInput"
        style={{ gridArea: "fechaCaducidad" }}
      >
        <label>Fecha de caducidad</label>
        <input
          disabled
          value={"2028-03-20"}
          type="date"
          id="transactionDateInput"
          name="date"
          required
        />
      </div>
      <div style={{ gridArea: "estado", width: "100%" }}>
        <label>Estado</label>
        <select
          disabled
          value={estado}
          style={{ display: "block" }}
        >
          <option>Buen estado</option>
          <option>Mal estado</option>
        </select>
      </div>
    </form>
  );
};

export default ProductoConsultado;
