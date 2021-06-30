import React from "react";
import Lottie from "react-lottie";
import noteData from "../../assets/lotties/48907-love-letter.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYmid slice",
  },
};

const Donations = () => {
  return (
    <form className="row g-3">
      <h1 style={{ textAlign: "center" }}>Donaciones</h1>
      <Lottie
        options={{ animationData: noteData, ...defaultOptions }}
        width={500}
        height={500}
      />
      <p></p>
      <div className="col-md-6">
        <label for="inputName" className="form-label">
          Nombre
        </label>
        <input type="text" className="form-control" id="inputName" />
      </div>
      <div className="col-md-6">
        <label for="inputLastName" className="form-label">
          Apellido
        </label>
        <input type="text" className="form-control" id="inputLastName" />
      </div>
      <div className="col-md-6">
        <label for="inputNumber" className="form-label">
          Número de Telefono
        </label>
        <input type="text" className="form-control" id="inputNumber" />
      </div>
      <div className="col-12">
        <label className="form-label">Donaciones:</label>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            Alimentos
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            Dinero
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            Articulos
          </label>
        </div>
      </div>
    </form>
  );
};

export default Donations;
