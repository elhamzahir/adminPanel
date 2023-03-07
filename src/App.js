import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AreaChart from "./components/AreaChart/AreaChart";
import PieChart from "./components/PieChart/PieChart";
import Charts from "./components/Charts/charts";

function App() {
  return (
      <>
        <Header />
        <Navbar />
          <Charts />
      </>
  )
}

export default App;
