import React, { Fragment } from "react";

const Register = () => {
  /**
   * Agregar React Hook Form para realizar las validaciones de los formularios.
   */

  return (
    <Fragment>
      <h1>REGISTER</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Registro</h5>
          <form>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Nombre Usuario"
            />
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Apellido Paterno"
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            <button
            className="btn btn-success form-control"
            type="submit"
            >Registrame</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
