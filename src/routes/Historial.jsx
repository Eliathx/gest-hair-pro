import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BotonRegresar from "../components/BotonRegresar";

const Historial = (props) => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Lalo Salamanca 7PM",
    },
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Nacho Varga 11AM",
    },
  ]);

  const localizer = momentLocalizer(moment);

  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        marginTop: "3rem",
        color: "white",
      }}
    >
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        events={events}
        style={{ height: 500 }}
      />
      <BotonRegresar></BotonRegresar>
    </div>
  );
};

export default Historial;
