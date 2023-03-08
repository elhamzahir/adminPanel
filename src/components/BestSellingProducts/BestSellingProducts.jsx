import React from "react";
import "./BestSellingProducts.css";

export default function BestSellingProducts({productName , productSold}) {
    return (
        <>
            <div className="bestSellingProductsDetails">
                <div className="bestSellingProductsDetailsContainer">
                    <p>{productName}</p>
                    <p>{productSold}</p>
                </div>
            </div>
        </>
    )
}