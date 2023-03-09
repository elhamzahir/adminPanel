import React from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Navbar() {
    return (
        <>
            <div className="navbarContainer">
                <form>
                    <input className="searchInput" placeholder="Search" type="text" />
                    <button><SearchIcon /></button>
                </form>
                <div className="filterProducts">
                    <p className="filterSection">Filter <FilterAltIcon className="filterIcon" sx={{fontSize: 16}} /></p>
                    <p className="sortSection">Sort by</p>
                </div>
            </div>
        </>
    )
}