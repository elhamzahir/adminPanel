import React, {useState} from "react";
import "./Charts.css";
import AreaChart from "../../components/AreaChart/AreaChart";
import PieChart from "../../components/PieChart/PieChart";
import MainMenu from "../../components/MainMenu/MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Navbar from "../../components/Navbar/Navbar";
import Total from "../../components/Total/Total";
import Orders from "../../components/Orders/Orders";
import BestSelling from "../../components/BestSelling/BestSelling";

export default function Charts() {
    // return (
    //     <div className="chartsContainer">
    //         <AreaChart />
    //         <PieChart />
    //     </div>
    // )

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(!open);};

    const [anchor, setAnchor] = useState(null);
    const openMenu = (event) => {setAnchor(event.currentTarget);};
    const closeMenu = () => {setAnchor(null);};

    const [anchor1, setAnchor1] = useState(null);
    const openMenu1 = (event) => {setAnchor1(event.currentTarget);};
    const closeMenu1 = () => {setAnchor1(null);};

    const [anchor2, setAnchor2] = useState(null);
    const openMenu2 = (event) => {setAnchor2(event.currentTarget);};
    const closeMenu2 = () => {setAnchor2(null);};

    return (
        <div className="charts">
            {open ? (
                <MainMenu />
            ) : null}
            <div className="chartContainer">
                <header className="headerContainer">
                    <button className="menuButton" onClick={handleOpen}><MenuIcon className="menuIcon" sx={{fontSize:36}} /></button>
                    <div className="headerContent">

                        <button className="headerName" onClick={openMenu}>elham zahir <ExpandMoreIcon /></button>
                        <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={closeMenu} keepMounted>
                            <MenuItem>Setting</MenuItem>
                            <MenuItem>Log Out</MenuItem>
                        </Menu>

                        <button className="notifications" onClick={openMenu1}><NotificationsIcon /> <ExpandMoreIcon /></button>
                        <Menu open={Boolean(anchor1)} anchorEl={anchor1} onClose={closeMenu1} keepMounted>
                            <MenuItem>dfghjk</MenuItem>
                            <MenuItem>xfghjkl</MenuItem>
                        </Menu>

                        <button className="messages" onClick={openMenu2}><LocalPostOfficeIcon /> <ExpandMoreIcon /></button>
                        <Menu open={Boolean(anchor2)} anchorEl={anchor2} onClose={closeMenu2} keepMounted>
                            <MenuItem>bbnsmd,f.g/h</MenuItem>
                            <MenuItem>fgxhjckbn</MenuItem>
                        </Menu>

                        <button className="todo"><FormatListBulletedIcon /></button>
                    </div>
                </header>
                <div className="chartsPageContent">
                    <h3 className="chartsTitle">Charts</h3>
                    <AreaChart />
                    <PieChart />
                </div>

            </div>
        </div>
    )
}