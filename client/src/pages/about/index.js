import React from "react";
import Lottie from "react-lottie";
// Cargar componente de Lottie
import noteData from "../../assets/lotties/7566-dancing-dog.json";

// Configuración de componente Lottie
const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYmid slice",
  },
};

const About = () => {
  return (
    <div className="row mt-4">
      {/* Lottie Component column */}
      <div className="col-12">
        <Lottie
          options={{ animationData: noteData, ...defaultOptions }}
          width={150}
          height={150}
          />
      </div>
      <div className="col-12 col-md-4">
        <div class="card" style={{ width: "20rem" }}>
          <div class="card-body">
            <h5 class="card-title">Quienes Somos</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque eum repudiandae officia ut quae sunt recusandae
              delectus explicabo! Possimus tempore modi quis fuga nesciunt omnis
              asperiores expedita iure labore delectus minus maiores maxime vero
              veritatis iste quas nobis ut, explicabo itaque placeat officiis!
              Repellendus ut neque cupiditate sequi beatae.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div class="card" style={{ width: "20rem" }}>
          <div class="card-body">
            <h5 class="card-title">Misión</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem quas voluptas vel, iusto unde explicabo hic laborum
              dicta. Facilis modi voluptatum fugiat illum mollitia accusamus
              possimus hic nostrum alias in? Voluptates ad iste non debitis
              dolore accusamus quo, laudantium tempore ut porro. Ratione
              nesciunt veniam mollitia, in deleniti odit dicta.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div class="card" style={{ width: "20rem" }}>
          <div class="card-body">
            <h5 class="card-title">Visión</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dolorem saepe eos distinctio error aspernatur est ex, ducimus
              vitae qui dolore maxime esse, laboriosam assumenda. Ut illo amet
              vitae sequi voluptates delectus nisi dolorum, dolor eveniet.
              Voluptates reprehenderit est consequatur, nobis, aliquam rem error
              numquam provident sed, enim expedita veniam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
