import React from "react";
import "./Main.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Total from "../../components/Total/Total";
import Orders from "../../components/Orders/Orders";
import BestSelling from "../../components/BestSelling/BestSelling";
import AreaChart from "../../components/AreaChart/AreaChart";
import PieChart from "../../components/PieChart/PieChart";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "../../components/Menu/Menu";

export default function Main() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="main">
            {open ? (
                <Menu />
            ) : null}
            <div className="mainContainer">
                <header className="headerContainer">
                    <button onClick={handleOpen}><MenuIcon className="menuIcon" sx={{fontSize:36}} /></button>
                    <p className="headerName">elham zahir <ExpandMoreIcon className="expandMoreIcon" sx={{fontSize:20}} /></p>
                    <div className="userOptions">
                        <div>visit website</div>
                        <div className="logOut">log out <LogoutIcon className="logOutIcon" sx={{fontSize:16}} /></div>
                    </div>
                </header>
                <Navbar />
                <Total totalSales={'$19,234,344,334'} totalOrder={3290} totalProducts={322} />
                <AreaChart />
                <PieChart />
                <Orders />
                <BestSelling />
            </div>
        </div>
    )
}