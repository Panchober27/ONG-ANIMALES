import React from "react";

// imagen de la primera card...
// esto deberia ser dinamico cargado con un for o map.
import Img from "../../assets/img/landing-no-edit.png";

// Creare una nueva ruta en el servidor que responda 3 animales y
// 3 usuarios, para mostrar sus atributos

// La logica de esto la creare por mientras en el archivo Demo.js
// Luego traere esa logica a este archivo

const Cards = () => {
  return (
    <div className="row pt-10">
      <div className="col-12 col-md-4 mt-4">
        <div class="card" style={{ width: "19rem" }}>
          <img
            // src="https://via.placeholder.com/350"
            src={Img}
            // className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-text">Cliente y animal 1</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-4">
        <div class="card" style={{ width: "19rem" }}>
          <img
            src="https://via.placeholder.com/350"
            // className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-4">
        <div class="card" style={{ width: "19rem" }}>
          <img
            src="https://via.placeholder.com/350"
            // className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-4">
        <div class="card" style={{ width: "19rem" }}>
          <img
            src="https://via.placeholder.com/350"
            // className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-4">
        <div class="card" style={{ width: "19rem" }}>
          <img
            src="https://via.placeholder.com/350"
            // className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mt-4">
        <div class="card" style={{ width: "19rem" }}>
          <img
            src="https://via.placeholder.com/350"
            // className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
