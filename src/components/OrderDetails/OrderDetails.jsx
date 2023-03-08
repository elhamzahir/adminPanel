import React from "react";
import "./Orderdetails.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function OrderDetails({orderID , orderStatus , customerName , orderPrice}) {
    return (
        <>
            <div className="orderDetails">
                <div className="orderDetailsContainer">
                    <p>{orderID}</p>
                    <p>{orderStatus}</p>
                    <p>{customerName}</p>
                    <p>{orderPrice} $</p>
                    <p className="horizontalMenuIcon">
                        <DeleteIcon sx={{fontSize:24}} className="deleteOrder" />
                        <EditIcon sx={{fontSize:24}} className="editOrder" />
                    </p>
                </div>
            </div>
        </>
    )
}