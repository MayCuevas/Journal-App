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
  <div class="news">
    <h2 class="news__subtitle">{data.category}</h2>
    <h1 class="news__title">{data.title}</h1>
    <img class="news__img" src={process.env.PUBLIC_URL + data.img} />
  </div>
));

const Aside = (data) => {
  return <aside class="aside-lastest">{info}</aside>;
};
export default Aside;
