import React from "react";
import "./principal.scss";
import news from "../../common/data/newsData.json";
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

const info = news.map((item) => (
  <article className="principal-section__article">
    <img
      className="principal-section__article--img"
      src={process.env.PUBLIC_URL + item.image}/>
    <div className="principal-section__article--container">
        <h3 className="principal-section__article--subtitle">{item.subtitle}</h3>
        <h2 className="principal-section__article--title">{item.title}</h2>
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