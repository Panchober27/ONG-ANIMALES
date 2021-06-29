import React, { Fragment, useState } from "react";

const Demo = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const datas = await fetch("http://localhost:3300/landing-cards");
    const landingData = await datas.json();
    setData(landingData);
  };

  return (
    <Fragment>
      <h1>Demo de el nuevo fetch :)</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id_lan}>
            Datos: {item.client_name} {item.animal_name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Demo;
