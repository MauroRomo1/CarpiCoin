import React from "react";

import { NavLink } from "react-router-dom";

import criptoCarousel from "../../img/carousel/cripto-carousel.jpg";
import NFTCarousel from "../../img/carousel/NFT-carousel.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="overlay"></div>
          <img src={NFTCarousel} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="title"> Encontra los mejores NFTs arts</h5>
            <p>Revisa los NFTs del mercado.</p>

            <NavLink
              className="btn btn-carousel title bg-warning bg-gradient"
              to="/nft"
            >
              Revisar
            </NavLink>
          </div>
        </div>
        <div className="carousel-item">
          <div className="overlay"></div>
          <img src={criptoCarousel} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="title">Revisa el mercado de criptomonedas</h5>
            <p>mantenete al dia con el precio de las criptomonedas.</p>

            <NavLink
              className="btn btn-carousel title bg-warning bg-gradient"
              to="/nft"
            >
              Revisar
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
