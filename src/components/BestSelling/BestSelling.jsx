import React from "react";
import "./BestSelling.css";
import BestSellingProducts from "../BestSellingProducts/BestSellingProducts";

export default function BestSelling() {
    return (
        <div className="bestSellingContainer">
            <div className="bestSellingContainerTitle">
                <h3>Best Selling Products</h3>
                <button className="seeAllProductsButton">See All</button>
            </div>
            <div className="bestSellingTitle">
                <p>product</p>
                <p>sold</p>
            </div>
            <BestSellingProducts productName="headphone" productSold={1234} />
        </div>
    )
}