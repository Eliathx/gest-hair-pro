import { useState } from "react";
import ClienteConsultado from "../../components/ClienteConsultado";
const ClienteConsultadoPage = () => {
  return (
    <div style={{ margin: "0 10rem" }}>
      <ClienteConsultado
        nombres={"Alex Damian"}
        apellidos={"Minda Campozano"}
        sexo={"Masculino"}
        estadoCivil={"Casado"}
        fechaNacimiento={"2002-07-22"}
        direccion={"Carcelén"}
        cedula={"0750857187"}
        email={"alex.damian@epn.edu.ec"}
        telefono={"0999999993"}
        enfermedadesCapilares={"Psoriasis"}
        alergias={""}
        preferencias={"Gel Ego"}
        estado={"Activo"}
      />
    </div>
  );
};
export default ClienteConsultadoPage;
