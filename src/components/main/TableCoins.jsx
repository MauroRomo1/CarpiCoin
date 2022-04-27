import React from "react";

import numeral from "numeral";

import CoinIcion from "../main/CoinIcion";

import { Link } from "react-router-dom";

const TableCoins = ({ setUpdate, coins, update }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#Rank</th>
            <th>Name</th>
            <th>Price Usd</th>
            <th>Market Cap</th>
            <th>VWAP (24hs)</th>
            <th>Supply</th>
            <th>Volume (24hs)</th>
            <th>
              <button
                className="btn btn-warning rounded-pill"
                onClick={() => setUpdate(!update)}
              >
                Actualizar
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.datos.map((coin) => (
            <tr key={coin.id}>
              <th className="d-flex justify-content-between" scope="row">
                {coin.rank}
                <CoinIcion symbol={coin.symbol} />
              </th>
              <td>
                <Link className="nav-link link-dark" to={`/coin/${coin.id}`}>
                  <b>{coin.name}</b>
                </Link>
              </td>
              <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
              <td>{numeral(coin.marketCapUsd).format("($ 0.00 a)")}</td>
              <td>{numeral(coin.vwap24Hr).format("$0,0.00")}</td>
              <td>{numeral(coin.supply).format("($ 0.00 a)")}</td>
              <td>{numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}</td>
              <td
                className={
                  coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
                }
              >
                <b>{parseFloat(coin.changePercent24Hr).toFixed(2)}%</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;
