import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import getMonthlyTotal from "../../utils/getTotal";

import "./estadisticasClientes.css";
import BotonRegresar from "../../components/BotonRegresar";

export default function EstadisticasClientes() {
  const [estadisticaMensual, setEstadisticaMensual] = useState([
    {
      mes: "Diciembre 2023",
      data: [
        { name: "Tinturado", value: 21 },
        { name: "Corte", value: 62 },
        { name: "Peinado", value: 32 },
        { name: "Tratamiento", value: 13 },
        { name: "Venta de producto", value: 11 },
      ],
    },
    {
      mes: "Enero 2024",
      data: [
        { name: "Tinturado", value: 12 },
        { name: "Corte", value: 42 },
        { name: "Peinado", value: 20 },
        { name: "Tratamiento", value: 8 },
        { name: "Venta de producto", value: 4 },
      ],
    },
    {
      mes: "Febrero 2024",
      data: [
        { name: "Tinturado", value: 19 },
        { name: "Corte", value: 57 },
        { name: "Peinado", value: 28 },
        { name: "Tratamiento", value: 12 },
        { name: "Venta de producto", value: 13 },
      ],
    },
  ]);

  return (
    <div className="estadisticaMensualPageWrapper">
      <BotonRegresar></BotonRegresar>

      {estadisticaMensual.map((element) => {
        return (
          <EstadisticaMensual
            mes={element.mes}
            data={element.data}
          />
        );
      })}
    </div>
  );
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function EstadisticaMensual({ mes, data }) {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8042"];

  return (
    <div className="estadisticaMensualContainer">
      <h3>{mes}</h3>
      <p>{"Cantidad total de servicios: " + getMonthlyTotal(data)}</p>

      <PieChart
        margin={{ top: -30 }}
        width={350}
        height={310}
      >
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="var(--third-bg)"
          label
        >
          {/* {data.map((index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index]}
            />
          ))} */}
          <Legend
            verticalAlign="top"
            height={36}
          ></Legend>
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
