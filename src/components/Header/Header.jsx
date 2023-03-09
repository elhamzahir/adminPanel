import React from "react";
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header({adminName}) {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    //
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    //
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    //
    // const styles = {
    //     root: {
    //         height: 100
    //     },
    //     menu: {
    //         position: "relative",
    //         top: 100
    //     }
    // };

    const [open, setOpen] = React.useState(false);
    sessionStorage.setItem("open" , open);

    const handleOpen = () => {
        setOpen(!open);
        sessionStorage.setItem("open" , open);
    };


    // alert(open)

    return (
        <>
            <header className="headerContainer">
                <button onClick={handleOpen}><MenuIcon className="menuIcon" sx={{fontSize:36}} /></button>
                {/*<div className="dropdown">*/}
                {/*    {open ? (*/}
                {/*        <ul className="menu">*/}
                {/*            <li className="menu-item">Menu 1</li>*/}
                {/*            <li className="menu-item">Menu 2</li>*/}
                {/*        </ul>*/}
                {/*    ) : null}*/}
                {/*    /!*{open ? <div>Is Open</div> : <div>Is Closed</div>}*!/*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <Button className="menuButton"*/}
                {/*        aria-controls="simple-menu"*/}
                {/*        aria-haspopup="true"*/}
                {/*        onClick={handleClick}>*/}
                {/*        <MenuIcon className="menuIcon" sx={{fontSize:36}} />*/}
                {/*    </Button>*/}
                {/*    <Menu*/}
                {/*        style={{height:'100vh' , width:'400px' , marginLeft:"0"}}*/}
                {/*        keepMounted*/}
                {/*        anchorEl={anchorEl}*/}
                {/*        onClose={handleClose}*/}
                {/*        open={Boolean(anchorEl)}>*/}
                {/*        <MenuItem onClick={handleClose}>My Account</MenuItem>*/}
                {/*        <MenuItem onClick={handleClose}>Settings</MenuItem>*/}
                {/*        <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                {/*        <MenuItem onClick={handleClose}>Logout</MenuItem>*/}
                {/*    </Menu>*/}
                {/*</div>*/}
                <p className="headerName">{adminName} <ExpandMoreIcon className="expandMoreIcon" sx={{fontSize:20}} /></p>
                <div className="userOptions">
                    <div>visit website</div>
                    <div className="logOut">log out <LogoutIcon className="logOutIcon" sx={{fontSize:16}} /></div>
                </div>
            </header>
        </>
    )
}