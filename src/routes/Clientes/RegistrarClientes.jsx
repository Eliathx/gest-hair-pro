import BotonRegresar from "../../components/BotonRegresar";
import ClientInfo from "../../components/ClientInfo";
const RegistrarClientes = () => {
  return (
    <div style={{ margin: "0 10rem" }}>
      <h2>Registrar nuevo cliente</h2>
      <ClientInfo />
      <BotonRegresar></BotonRegresar>
    </div>
  );
};

export default RegistrarClientes;
