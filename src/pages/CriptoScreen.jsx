import React, { useEffect, useState } from "react";

import { getCoins } from "../helpers/coinFetch";

import Loader from "../components/loader/Loader";
import TableCoins from "../components/main/TableCoins";
import CoinPagination from "../components/main/CoinPagination";

import "../css/styles.css";
import CoinSearch from "../components/main/CoinSearch";

const CriptoScreen = () => {
  const [coins, setCoins] = useState({
    loading: true,
    datos: [],
  });

  const [update, setUpdate] = useState(false);

  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    getCoins(pagina).then((respuesta) => {
      setCoins({
        loading: false,
        datos: respuesta,
      });
    });
  }, [update, pagina]);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <CoinSearch />
          {coins.loading ? (
            <>
              <h4 className="text-center title my-4">
                Cargando criptomonedas...
              </h4>
              <Loader />
            </>
          ) : (
            <>
              <TableCoins coins={coins} setUpdate={setUpdate} update={update} />
              <CoinPagination pagina={pagina} setPagina={setPagina} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CriptoScreen;
