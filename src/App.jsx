import "./App.css";
import { useState } from "react";

import { Route, Routes, HashRouter } from "react-router-dom";
import Login from "./routes/Login";
import Clientes from "./routes/Clientes/Clientes";
import Ventas from "./routes/Ventas/Ventas";
import ProtectedLayout from "./routes/ProtectedLayout";
import Home from "./routes/Home";
import Productos from "./routes/Productos";
import Administración from "./routes/Administración";
import RegistrarClientes from "./routes/Clientes/RegistrarClientes";
import ConsultarClientes from "./routes/Clientes/ConsultarClientes";
import ClienteConsultadoPage from "./routes/Clientes/clienteConsultadoPage";
import ClientHistoryPage from "./components/ClientHistoryPage";
import EstadisticasClientes from "./routes/Clientes/EstadisticasClientes";
import RegistrarProducto from "./routes/Productos/RegistrarProducto";
import ConsultarProducto from "./routes/Productos/ConsultarProducto";
import EmitirFactura from "./routes/Ventas/EmitirFactura";
import ConsultarFacturaFechas from "./routes/Ventas/ConsultarFacturaFechas";
import ConsultarFacturaCedula from "./routes/Ventas/ConsultarFacturaCedula";
import ModificarParametros from "./routes/Administracion/ConsultarParametros";
import ConsultarParametros from "./routes/Administracion/ConsultarParametros";
import AgregarUsuarios from "./routes/Administracion/AgregarUsuarios";
import ConsultarUsuario from "./routes/Administracion/ConsultarUsuario";
import UsuarioConsultado from "./routes/Administracion/UsuarioConsultado";
import Historial from "./routes/Historial";
import FacturasConsultadas from "./routes/Ventas/FacturasConsultadas";
import FacturasConsultadasCliente from "./routes/Ventas/FacturasConsultadasCliente";
import ProductoConsultado from "./routes/Productos/ProductoConsultado";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <ProtectedLayout />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        >
          <Route
            index
            element={<Home />}
          />
          <Route path="/productos">
            <Route
              index
              element={<Productos />}
            ></Route>
            <Route
              path="productoConsultado"
              element={<ProductoConsultado />}
            ></Route>
            <Route
              path="registrar"
              element={<RegistrarProducto />}
            ></Route>

            <Route
              path="consultar"
              element={<ConsultarProducto />}
            ></Route>
          </Route>
          <Route
            path="/agenda"
            element={<Historial />}
          ></Route>
          <Route path="/ventas">
            <Route
              index
              element={<Ventas />}
            ></Route>
            <Route
              path="registrar"
              element={<EmitirFactura />}
            ></Route>
            <Route
              path="facturasConsultadas"
              element={<FacturasConsultadas />}
            ></Route>
            <Route
              path="facturasConsultadasCliente"
              element={<FacturasConsultadasCliente />}
            ></Route>
            <Route
              path="consultarFacturaCedula"
              element={<ConsultarFacturaCedula />}
            ></Route>
            <Route
              path="consultarFacturaFechas"
              element={<ConsultarFacturaFechas />}
            ></Route>
          </Route>
          <Route path="/clientes">
            <Route
              index
              element={<Clientes />}
            ></Route>
            <Route
              path="registrar"
              element={<RegistrarClientes />}
            ></Route>
            <Route
              path="estadisticasClientes"
              element={<EstadisticasClientes />}
            ></Route>
            <Route
              path="consultar"
              element={<ConsultarClientes />}
            ></Route>
            <Route
              path="historial"
              element={<ClientHistoryPage />}
            ></Route>
            <Route
              path="clienteConsultado"
              element={<ClienteConsultadoPage />}
            ></Route>
          </Route>
          <Route path="/administracion">
            <Route
              index
              element={<Administración />}
            ></Route>
            <Route
              path="consultarUsuarios"
              element={<ConsultarUsuario />}
            ></Route>
            <Route
              path="agregarUsuarios"
              element={<AgregarUsuarios />}
            ></Route>
            <Route
              path="usuarioConsultado"
              element={<UsuarioConsultado />}
            ></Route>
            <Route
              path="consultarParametros"
              element={<ConsultarParametros />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
