import React from "react";

import portadaNFT from "../../img/card-novelty/nft-portada-card.jpg";
import portadaCripto from "../../img/card-novelty/cripto-portada-card2.jpg";
import portadaNews from "../../img/card-novelty/news-portada-card2.jpg";

const CardsNote = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 text-center">
      <div className="col">
        <div className="card h-100 shadow border border-2 border-dark mb-5 bg-body rounded">
          <img src={portadaNFT} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Busca los mejores NFTs</h5>
            <p className="card-text">Revisa los NFTs de cualquier billetera.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow border border-2 border-dark mb-5 bg-body rounded">
          <img src={portadaCripto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Revisa el precio de tus criptos</h5>
            <p className="card-text">
              Consulta el precio de las tops criptos del mundo.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow border border-2 border-dark mb-5 bg-body rounded">
          <img src={portadaNews} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Mira las ultimas noticas del mundo cripto
            </h5>
            <p className="card-text">
              Mantenete al dia con las ultimas noticas de las criptomonedas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsNote;
