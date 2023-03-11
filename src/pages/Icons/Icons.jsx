import React , {useState} from "react";
import "./Icons.css";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainMenu from "../../components/MainMenu/MainMenu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import IconContainer from "../../components/IconContainer/IconContainer";

export default function Icons() {
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
        <div className="Icons">
            {open ? (
                <MainMenu />
            ) : null}
            <div className="IconsContainer">
                <header className="headerContainer">
                    <button onClick={handleOpen}><MenuIcon className="menuIcon" sx={{fontSize:36}} /></button>
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
                    </div>
                </header>
                <div className="iconsSection">
                    <h3 className="iconTitle">Icons</h3>
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<LocalPostOfficeIcon />} iconAddress="@mui/icons-material/LocalPostOffice" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                    <IconContainer icon={<NotificationsIcon />} iconAddress="@mui/icons-material/Notifications" />
                </div>
            </div>
        </div>
    )
}