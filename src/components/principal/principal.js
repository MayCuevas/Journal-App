import React from "react";
import "./principal.scss";

const dataArray = [
  {
    subtitle: "EL ENFADO DEL ‘10’",
    title:
      "Messi vuelve a atizar desde las redes sociales por unas ‘fake news’",
    img: "./messi.jpg",
  },
  {
    subtitle:"UN COMISARIO FACILITÓ EL DATO EN MONCLOA",
    title:"Las falsas 'cuentas falsas' de la Policía: no hay 1,5 millones de 'bots' con bulos sobre el Covid" ,
    img: "./ministro-f-grande-marlaska.jpg",
  },
];

const info = dataArray.map((data) => (
  <article className="principal-section__article">
    <img
      className="principal-section__article--img"
      src={process.env.PUBLIC_URL + data.img}/>
    <div className="principal-section__article--container">
        <h3 className="principal-section__article--subtitle">{data.subtitle}</h3>
        <h2 className="principal-section__article--title">{data.title}</h2>
    </div>
  </article>
));

const Section = () => {
  return (
    <div className="principal-section">
     {info}
    </div>
  );
};

export default Section;