import React from "react";
import "./aside.scss";

const dataArray = [
  {
    category: "Covid-19",
    title:
      "Es falso que Tasuku Honjo, Premio Nobel de Medicina,dijo que el coronavirus no es natural",
    img: "/falsaDeclaracionNobel.jpg",
  },
  {
    category: "Mundo",
    title: "No hay evidencia de que la nicotina protege del coronavirus",
    img: "/tabaco.jpg",
  },
  {
    category: "Economía",
    title:
      "Es falso el video que afirma que los billetes de $ 100 no tienen numeración",
    img: "/billetes.png",
  },
];

const info = dataArray.map((data) => (
  <div className="news">
    <h2 className="news__subtitle">{data.category}</h2>
    <h1 className="news__title">{data.title}</h1>
    <img className="news__img" alt="aside-news-image" src={process.env.PUBLIC_URL + data.img} />
  </div>
));

const Aside = () => {
  return <aside className="aside-lastest">
    <div className="news-wrapper">
      {info}
    </div>
    </aside>;
};

export default Aside;
