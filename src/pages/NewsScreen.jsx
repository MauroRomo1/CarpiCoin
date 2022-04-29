import React, { useEffect, useState } from "react";

import "../css/newsStyles.css";

import CardsNews from "../components/main/CardsNews";

import { getNews } from "../helpers/newFetch";
import Loader from "../components/loader/Loader";

const NewsScreen = () => {
  const [news, setNews] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getNews().then((repuesta) => {
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
        {news.loading ? (
          <>
            <h4 className="text-center title my-4">Cargando informacion...</h4>
            <Loader />
          </>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
            {news.datos.map((nota, indice) => (
              <CardsNews nota={nota} key={indice} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default NewsScreen;
