import React, { useEffect, useState } from "react";

import "../css/newsStyles.css";

import CardsNews from "../components/main/CardsNews";

import { getNews } from "../helpers/newFetch";

const NewsScreen = () => {
  const [news, setNews] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getNews().then((repuesta) => {
      console.log(repuesta);
      setNews({
        loading: false,
        datos: repuesta,
      });
    });
  }, []);

  return (
    <main>
      <div className="container">
        {/* ==== Titulo ==== */}
        <div className="row">
          <div className="col">
            <h5 className="titulo text-center my-5">
              Mira las ultimas noticias sobre criptomonedas
            </h5>
          </div>
        </div>
        {/* ==== Cards de noticias ==== */}
        <CardsNews nota={news} />
      </div>
    </main>
  );
};

export default NewsScreen;
