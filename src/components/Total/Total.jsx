import React from "react";
import "./Total.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Total({totalSales , totalOrder , totalProducts}) {
    return (
        <div className="totals">
            <div className="totalContainer">
                <AttachMoneyIcon sx={{fontSize:50}} className="totalIcon dolorIcon" />
                <div className="totalDesc">
                    <p className="totalTitle">Total Sales</p>
                    <p className="totalContent">{totalSales}</p>
                </div>
            </div>
            <div className="totalContainer">
                <LocalGroceryStoreIcon sx={{fontSize:50}} className="totalIcon shopIcon" />
                <div className="totalDesc">
                    <p className="totalTitle">Total Orders</p>
                    <p className="totalContent">{totalOrder}</p>
                </div>
            </div>
            <div className="totalContainer">
                <ShoppingBasketIcon sx={{fontSize:50}} className="totalIcon basketIcon" />
                <div className="totalDesc">
                    <p className="totalTitle">Total Products</p>
                    <p className="totalContent">{totalProducts}</p>
                </div>
            </div>
        </div>

    )
}