import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import numeral from "numeral";

import CoinIcon from "../components/main/CoinIcion";
import Loader from "../components/loader/Loader";

import { getCoinId } from "../helpers/coinFetch";

import "../css/CoinStyles.css";

const CoinScreen = () => {
  let params = useParams();
  const { coinId } = params;

  const [coin, setCoin] = useState({
    loading: true,
    datos: {},
  });
  const { loading, datos } = coin;

  useEffect(() => {
    getCoinId(coinId).then((response) => {
      setCoin({
        loading: false,
        datos: response,
      });
    });
  }, [coinId]);

  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-12 col-md-8 offset-md-2">
          {loading ? (
            <>
              <h4 className="text-center title my-4">
                Cargando informacion...
              </h4>
              <Loader />
            </>
          ) : (
            <div className="card mb-3 table-coin shadow border border-2 border-dark mb-5 bg-body rounded">
              <div className="row g-0">
                <div className="col-md-4 mt-2 logo-icon">
                  <CoinIcon symbol={datos.symbol} />
                  <h3 className="mt-2">({datos.symbol})</h3>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{datos.name}</h3>
                    <h5>#Rank {datos.rank}</h5>
                    <h3>
                      {numeral(datos.priceUsd).format("$0,0.00")}{" "}
                      <small
                        className={
                          datos.changePercent24Hr > 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {parseFloat(datos.changePercent24Hr).toFixed(2)}%
                      </small>
                    </h3>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <span>Market Cap</span>
                        <h5 className="porcentajes">
                          {numeral(datos.marketCapUsd).format("($ 0.00 a)")}
                        </h5>
                      </div>
                      <div>
                        <span>Volume(24hs)</span>
                        <h5 className="porcentajes">
                          {numeral(datos.volumeUsd24Hr).format("($ 0.00 a)")}
                        </h5>
                      </div>
                      <div>
                        <span>Supply</span>
                        <h5 className="porcentajes">
                          {numeral(datos.supply).format("($ 0.00 a)")}
                        </h5>
                      </div>
                    </div>
                    <div className="d-grid mt-5">
                      <a
                        href={`https://coincap.io/assets/${datos.id}`}
                        className="btn btn-warning rounded-pill"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Más detalles
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinScreen;
