import React, { useEffect, useState } from "react";

import Loader from "../components/loader/Loader";
import CardsNFTs from "../components/main/CardsNFTs";

import { getNFTs } from "../helpers/nftFetch";

const NFTScreen = () => {
  const [nft, setNft] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getNFTs().then((respuesta) => {
      setNft({
        loading: false,
        datos: respuesta.items,
      });
    });
  }, []);

  return (
    <div className="container my-5">
      <h4 className="text-center titulo my-5">
        Mira los los ultimos NFTs del mercado
      </h4>
      {nft.loading ? (
        <>
          <h4 className="text-center titulo">Cargando NFTs...</h4>
          <Loader />
        </>
      ) : (
        <CardsNFTs nft={nft} />
      )}
    </div>
  );
};

export default NFTScreen;
