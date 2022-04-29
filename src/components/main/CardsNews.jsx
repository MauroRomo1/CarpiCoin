import React from "react";

const CardsNews = ({ nota, indice }) => {
  return (
    <div key={indice} className="col">
      <div className="card h-100 shadow border border-2 border-dark mb-5 bg-body rounded text-center">
        <img
          src={nota.urlToImage}
          className="card-img-top h-50"
          alt="imagen de la noticia"
        />
        <div className="card-body">
          <h5 className="card-title">{nota.title}</h5>
          <p className="card-text">{nota.description}</p>
        </div>
        <div className="mb-3 text-center">
          <a
            href={nota.url}
            className="btn btn-warning"
            target="_blank"
            rel="noreferrer"
          >
            Ver la noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardsNews;
