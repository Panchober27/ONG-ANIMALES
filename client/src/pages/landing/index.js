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
        <div className="col-12 col-md-4">
          <div class="card" style={{ width: "14rem" }}>
            <img
              src="https://via.placeholder.com/350"
              // className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div class="card" style={{ width: "14rem" }}>
            <img
              src="https://via.placeholder.com/350"
              // className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div class="card" style={{ width: "14rem" }}>
            <img
              src="https://via.placeholder.com/350"
              // className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
