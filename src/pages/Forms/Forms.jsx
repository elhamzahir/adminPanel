import React, {useState} from "react";
import "./Forms.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

export default function Forms() {
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
            <div className="formsContainer">
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
                <div className="formsPageContent">
                    <h3 className="formsTitle">Forms</h3>

                    <div className="form">
                        <div className="signUp">
                            <label>Product Name:</label>
                            <input className="productsInput" type="text" />
                            <label>Product Details:</label>
                            <input className="productsInput" type="text" />
                            <label>Product Price:</label>
                            <input className="productsInput" type="text" />
                            <button className="productsButton">Add Product</button>
                        </div>
                    </div>

                    <div className="form">
                        <form className="signUp">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="enter your name" />
                            <label>Phone Number:</label>
                            <input type='number' placeholder="enter your phone number" name="phone" />
                            <label>Password:</label>
                            <input type="password" placeholder="enter your password" name="pass" />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className="form">
                        <form className="signIn">
                            <label>Phone Number:</label>
                            <input type='number' placeholder="enter your phone number" name="phone" />
                            <label>Password:</label>
                            <input type="password" placeholder="enter your password" name="pass" />
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}