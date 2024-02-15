import "./App.css";
import { useState } from "react";

import { Route, Routes, HashRouter } from "react-router-dom";
import Login from "./routes/Login";
import Clientes from "./routes/Clientes/Clientes";
import Ventas from "./routes/Ventas";
import ProtectedLayout from "./routes/ProtectedLayout";
import Home from "./routes/Home";
import Productos from "./routes/Productos";
import Historial from "./routes/Historial";
import Administración from "./routes/Administración";
import RegistrarClientes from "./routes/Clientes/RegistrarClientes";
import ConsultarClientes from "./routes/Clientes/ConsultarClientes";
import ClienteConsultadoPage from "./routes/Clientes/clienteConsultadoPage";
import ClientHistoryPage from "./components/ClientHistoryPage";
import EstadisticasClientes from "./routes/Clientes/EstadisticasClientes";

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
          <Route
            path="/productos"
            element={<Productos />}
          />
          <Route
            path="/ventas"
            element={<Ventas />}
          />
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
          <Route
            path="/agenda"
            element={<Historial />}
          />
          <Route
            path="/administración"
            element={<Administración />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
