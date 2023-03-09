import React from "react";
import "./IconContainer.css";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export default function IconContainer({icon , iconAddress}) {
    return (
        <div className="iconContainer">
            <div className="icon">{icon}</div>
            <p className="iconAddress">{iconAddress}</p>
        </div>
    )
}