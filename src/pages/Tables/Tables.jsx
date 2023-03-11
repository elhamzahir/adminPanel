import React, {useState} from "react";
import "./Tables.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Orders from "../../components/Orders/Orders";
import BestSelling from "../../components/BestSelling/BestSelling";
import data from "../../products.json"

export default function Tables() {
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
        <div className="tables">
            {open ? (
                <MainMenu />
            ) : null}
            <div className="tablesContainer">
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
                            <MenuItem>new message</MenuItem>
                            <MenuItem>new message</MenuItem>
                        </Menu>

                        <button className="messages" onClick={openMenu2}><LocalPostOfficeIcon /> <ExpandMoreIcon /></button>
                        <Menu open={Boolean(anchor2)} anchorEl={anchor2} onClose={closeMenu2} keepMounted>
                            <MenuItem>new message</MenuItem>
                            <MenuItem>new message</MenuItem>
                        </Menu>
                    </div>
                </header>
                <div className="tablesPageContent">
                    <h3 className="tablesPageTitle">Tables</h3>
                    <div className="productsPageContent">
                        <div className="productListContainer">
                            <div className="productTitlesContainer">
                                <div className="productTitles">ID</div>
                                <div className="productTitles">Name</div>
                                <div className="productTitles">Details</div>
                                <div className="productTitles">Price</div>
                            </div>
                            {data.map((product) => {
                                return (
                                    <div className="product" key={product.id} id={product.id}>
                                        <div className="productDetails">{product.id}</div>
                                        <div className="productDetails">{product.name}</div>
                                        <div className="productDetails">{product.details}</div>
                                        <div className="productDetails">{product.price} $</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Orders />
                    <BestSelling />
                </div>
            </div>
        </div>
    )
}