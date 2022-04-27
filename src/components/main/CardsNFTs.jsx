import React from "react";

import nftError from "../../img/nft-error/nftNoEncontrado.jpg";

const CardsNFTs = ({ nft }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
      {nft.datos.map((art, indice) => (
        <div key={indice} className="col">
          <div className="card h-100 shadow border border-2 border-dark mb-5 bg-body rounded text-center">
            <img
              src={art.first_nft_image_512 ? art.first_nft_image_512 : nftError}
              className="card-img-top img-fluid"
              style={{ height: 300 }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{art.collection_name}</h5>
              <p className="card-text">
                <b>Address:</b> {art.collection_address}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{art.contract_deployment_at}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsNFTs;
