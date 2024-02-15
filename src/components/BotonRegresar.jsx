import { useNavigate } from "react-router-dom";
import "../styles/components/botonRegresar.css";

const BotonRegresar = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(-1);
      }}
      className="botonRegresarContainer"
    >
      Regresar
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height={24}
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>
    </div>
  );
};

export default BotonRegresar;
