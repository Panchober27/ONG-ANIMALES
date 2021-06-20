import React, { Fragment } from "react";
import Carousel from "./Carousel";
import angryDog from '../../assets/img/perro-enojon.png';

const Landing = () => {
  return (
    <Fragment>
      <h3>Vista Animales</h3>
      <div className="row">
        <div className="col-12 col-md-9">
          <Carousel />
        </div>
        <div className="col-12 col-md-3">
          <img src={angryDog} />
          <div className="card" style={{ width: "19rem" }}>
            <div className="card-boyd">
              <h5 className="card-title">Col Chica</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus alias exercitationem vero porro nostrum odit animi,
                iste cum incidunt minima.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row pt-10">
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
