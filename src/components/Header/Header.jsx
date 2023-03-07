import React from "react";
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    const handleClick = () => {
        if(document.getElementsByClassName('userOptions')[0].style.opacity === '0') {
            document.getElementsByClassName('userOptions')[0].style.opacity = 1
        }
        else {
            document.getElementsByClassName('userOptions')[0].style.opacity = 0
        }
    }

    return (
        <>
            <header className="headerContainer">
                <MenuIcon className="menuIcon" sx={{fontSize:36}} />
                <p className="headerName" onClick={handleClick}>elham zahir <ExpandMoreIcon className="expandMoreIcon" sx={{fontSize:20}} /></p>
                <div className="userOptions">
                    <div>visit website</div>
                    <div className="logOut">log out <LogoutIcon className="logOutIcon" sx={{fontSize:16}} /></div>
                </div>
            </header>
        </>
    )
}