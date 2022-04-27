import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";

import Navbar from "./components/header/Navbar";

import CoinScreen from "./pages/CoinScreen";
import CriptoScreen from "./pages/CriptoScreen";
import ErrorScreen from "./pages/ErrorScreen";
import HomeScreen from "./pages/HomeScreen";
import NewsScreen from "./pages/NewsScreen";
import NFTScreen from "./pages/NFTScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/nft" element={<NFTScreen />} />
        <Route path="/criptomonedas" element={<CriptoScreen />} />
        <Route path="coin/:coinId" element={<CoinScreen />} />
        <Route path="/noticiasCripto" element={<NewsScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
