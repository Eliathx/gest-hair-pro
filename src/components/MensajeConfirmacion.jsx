import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function MensajeConfirmacion({ openModal, closeModal, text }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      className="mensajeConfirmacionRegistroCliente"
      ref={ref}
      onCancel={closeModal}
    >
      <div className="mensajeConfirmacionRegistroClienteInner">
        {text}
        <Link to="/">
          <button onClick={closeModal}>Listo</button>
        </Link>
      </div>
    </dialog>
  );
}

export default MensajeConfirmacion;
