import React, { useState } from "react";

const Register = () => {
  /**
   * Agregar React Hook Form para realizar las validaciones de los formularios.
   */

  // Esta constante es para almacenar la sesion que firebase me entrega, para luego
  // enviarla al server y que a su vez este envie dicha info a MongoDB :)
  // Recordar que la info de sesiones estara en Mongo y la info de Usuario y Animales en MySQL
  const [user, setUser] = useState();

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">
          Nombres
        </label>
        <input type="text" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">
          Confirmar Password
        </label>
        <input type="password" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">
          Apellido Paterno
        </label>
        <input type="text" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">
          Apellido Materno
        </label>
        <input type="text" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-md-6">
        <label htmlFor="" className="form-label">
          RUN
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label htmlFor="" className="form-label">
          Codigo Postal
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="col-12">
        <label for="inputAddress2" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Calle, Numero, depto, bloque, etc..."
        />
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">
          Ciudad
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">
          Comuna
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success">
          Registrame
        </button>
      </div>
    </form>
  );
};

export default Register;
