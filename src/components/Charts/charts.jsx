import React from "react";
import "./Charts.css";
import PieChart from "../PieChart/PieChart";
import AreaChart from "../AreaChart/AreaChart";

export default function Charts() {
    return (
        <div className="chartsContainer">
            <AreaChart />
            <PieChart />
        </div>
    )
}