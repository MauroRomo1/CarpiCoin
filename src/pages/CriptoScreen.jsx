import React, { useEffect, useState } from "react";

import { getCoins } from "../helpers/coinFetch";

const CriptoScreen = () => {
  const [coins, setCoins] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getCoins().then((respuesta) => {
      setCoins({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#Rank</th>
                  <th>Name</th>
                  <th>Price Usd</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {coins.datos.map((coin) => (
                  <tr>
                    <th scope="row">{coin.rank}</th>
                    <td>{coin.name}</td>
                    <td>{coin.priceUsd}</td>
                    <td>{coin.marketCapUsd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriptoScreen;
