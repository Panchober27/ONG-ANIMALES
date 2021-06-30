import React, { Fragment } from "react";
import Cards from "./Cards";
// import Cards2 from './Cards2'
import Carousel from "./Carousel";
import angryDog from "../../assets/img/perro-enojon.png";
import Lottie from "react-lottie";
import noteData from "../../assets/lotties/4888-dog-icon.json";

// Demo para pdir Cards!!!
import Demo from "./Demo";

// Configuracion de animaciones de Lottie, se puede pasar directo el noteData, pero para
// usar mas de un 'Lottie', conviene manejarlos de manera separada.
const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYmid slice",
  },
};

const Landing = () => {
  return (
    <Fragment>
      {/* Lottie Component */}
      <Lottie
        options={{ animationData: noteData, ...defaultOptions }}
        width={250}
        height={250}
      />
      <h3>Vista Animales</h3>
      <div className="row">
        <div className="col-12 col-md-9">
          <Carousel />
        </div>
        <div className="col-12 col-md-3">
          <img alt="..." src={angryDog} />
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
      <Cards />
      {/* <Demo /> */}
    </Fragment>
  );
};

export default Landing;
