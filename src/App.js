import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Charts from "./components/Charts/charts";
import Total from "./components/Total/Total";
import Orders from "./components/Orders/Orders";

function App() {
  return (
      <>
        <Header />
        <Navbar />
          <Total totalSales={'$19,234,344,334'} totalOrder={3290} totalProducts={322} />
          <Charts />
          <Orders />
      </>
  )
}

export default App;
