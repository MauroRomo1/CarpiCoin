import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchCoinByName } from "../../helpers/coinFetch";

const CoinSearch = () => {
  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const [options, setOptions] = useState([]);

  useEffect(() => {
    let termino = inputValue.trim();
    if (termino) {
      searchCoinByName(termino).then((response) => {
        setOptions(response);
      });
    }
  }, [inputValue]);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const searchCripto = () => {
    if (inputValue) {
      navigate(`/coin/${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <>
      <h5 className="titulo text-center my-3">
        Encontra una criptomoneda por su nombre
      </h5>
      <div className="input-group mb-5">
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Buscar una cripto por su nombre..."
          autoComplete="off"
          value={inputValue}
          onChange={handleChange}
        />
        <datalist id="datalistOptions">
          {options.map((item) => (
            <option key={item.id} value={item.id} />
          ))}
        </datalist>
        <button className="btn btn-warning" onClick={searchCripto}>
          Buscar
        </button>
      </div>
    </>
  );
};

export default CoinSearch;
