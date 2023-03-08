import React from "react";
import "./Main.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Total from "../../components/Total/Total";
import Orders from "../../components/Orders/Orders";
import BestSelling from "../../components/BestSelling/BestSelling";
import AreaChart from "../../components/AreaChart/AreaChart";
import PieChart from "../../components/PieChart/PieChart";

export default function Main() {
    return (
        <div className="mainContainer">
            <Header adminName={"elham zahir"} />
            <Navbar />
            <Total totalSales={'$19,234,344,334'} totalOrder={3290} totalProducts={322} />
            <AreaChart />
            <PieChart />
            <Orders />
            <BestSelling />
        </div>
    )
}