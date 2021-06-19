import React, { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <div className="row">
        <h3>Vista Animales</h3>
        <div className="row">
          <div className="col-12 col-md-9">Col Grande, Carousel</div>
          <div className="col-12 col-md-3">
            Col Chica, Post ong, Imagen, lorem
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">IMG</div>
        <div className="col-12 col-md-4">IMG</div>
        <div className="col-12 col-md-4">IMG</div>
      </div>
    </Fragment>
  );
};

export default Landing;
