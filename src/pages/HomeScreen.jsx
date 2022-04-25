import React from "react";

import CardsNote from "../components/main/CardsNote";
import Carousel from "../components/main/Carousel";

import covalentLogo from "../img/api-logos/covalent-logo.png";
import coincapLogo from "../img/api-logos/coincap-logo.png";
import newsAPILogo from "../img/api-logos/news-api-logo.jpg";

const HomeScreen = () => {
  return (
    <main>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center my-5 titulo">
              Queremos mantenerte al dia con la web3
            </h5>
          </div>
        </div>
        <CardsNote />
        <div className="row">
          <div className="col">
            <h5 className="text-center my-5 titulo">
              Podemos traerte estos servicios gracias a...
            </h5>
          </div>
        </div>
        <div className="text-center mb-5">
          <img src={covalentLogo} className="img-fluid" alt="..." />
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          <div className="col">
            <div className="card bg-transparent border border-white">
              <img src={newsAPILogo} className="card-img-top p-5" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card bg-transparent border border-white">
              <img src={coincapLogo} className="card-img-top p-5" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
