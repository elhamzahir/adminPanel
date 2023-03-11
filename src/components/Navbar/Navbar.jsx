import React, {useState} from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
    const [anchor, setAnchor] = useState(null);
    const openMenu = (event) => {setAnchor(event.currentTarget);};
    const closeMenu = () => {setAnchor(null);};

    const [anchor1, setAnchor1] = useState(null);
    const openMenu1 = (event) => {setAnchor1(event.currentTarget);};
    const closeMenu1 = () => {setAnchor1(null);};

    return (
        <>
            <div className="navbarContainer">
                <form>
                    <input className="searchInput" placeholder="Search" type="text" />
                    <button><SearchIcon /></button>
                </form>
                <div className="filterProducts">
                    <button className="filterSection" onClick={openMenu}>Filter <FilterAltIcon className="filterIcon" sx={{fontSize: 16}} /></button>
                    <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={closeMenu} keepMounted>
                        <MenuItem>name</MenuItem>
                        <MenuItem>price</MenuItem>
                    </Menu>
                    <button className="sortSection" onClick={openMenu1}>Sort by</button>
                    <Menu open={Boolean(anchor1)} anchorEl={anchor1} onClose={closeMenu1} keepMounted>
                        <MenuItem>alphabet</MenuItem>
                        <MenuItem>price, increasing</MenuItem>
                        <MenuItem>price, decreasing</MenuItem>
                        <MenuItem>latest</MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    )
}