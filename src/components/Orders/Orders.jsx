import React from "react";
import "./Orders.css";
import OrderDetails from "../OrderDetails/OrderDetails";

export default function Orders() {
    return (
        <div className="ordersContainer">
            <div className="ordersContainerTitle">
                <h3>Orders</h3>
                <button className="seeAllOrdersButton">See All</button>
            </div>
            <div className="ordersTitle">
                <p>order</p>
                <p>status</p>
                <p>name</p>
                <p>price</p>
                <p className="moreOptions">more</p>
            </div>
            <OrderDetails orderID={"#1234"} orderStatus={"successful"} customerName={"elham zahir"} orderPrice={1234} />
            <OrderDetails orderID={"#1234"} orderStatus={"successful"} customerName={"elham zahir"} orderPrice={1234} />
            <OrderDetails orderID={"#1234"} orderStatus={"successful"} customerName={"elham zahir"} orderPrice={1234} />
            <OrderDetails orderID={"#1234"} orderStatus={"successful"} customerName={"elham zahir"} orderPrice={1234} />
            <OrderDetails orderID={"#1234"} orderStatus={"successful"} customerName={"elham zahir"} orderPrice={1234} />
            <OrderDetails orderID={"#1234"} orderStatus={"successful"} customerName={"elham zahir"} orderPrice={1234} />
        </div>
    )
}