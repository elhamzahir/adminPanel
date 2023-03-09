import React , {useState} from "react";
import "./MainMenu.css";
import {useNavigate , Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ErrorIcon from '@mui/icons-material/Error';

export default function MainMenu() {
    const [openBasicUI , setOpenBasicUI] = useState(false)
    // const [openForm , setOpenForm] = useState(false)
    const [openError , setOpenError] = useState(false)
    const navigate = useNavigate();

    return (
        <>
            <ul className="menu">
                <li className="menu-item" onClick={() => {navigate("/Main")}}>
                    <span className="menuTitle">Dashboard</span>
                    <div className="menuIconContainer">
                        <HomeIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item" onClick={() => {setOpenBasicUI(!openBasicUI)}}>
                    <span>Basic UI Elements</span>
                    <div className="menuIconContainer">
                        {openBasicUI ? <KeyboardArrowDownIcon sx={{fontSize:18}} /> : <KeyboardArrowLeftIcon sx={{fontSize:18}} />}
                        <MyLocationIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                    {openBasicUI ? (
                        <ul>
                            <li className="dropdown">Buttons</li>
                            <li className="dropdown">DropDowns</li>
                            <li className="dropdown">Typography</li>
                        </ul>
                    ) : null}
                </li>

                <li className="menu-item">
                    <span>Form Elements</span>
                    <div className="menuIconContainer">
                        <FormatListBulletedIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item">
                    <span className="menuTitle">Tables</span>
                    <div className="menuIconContainer">
                        <HomeIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item">
                    <span className="menuTitle">Icons</span>
                    <div className="menuIconContainer">
                        <EmojiEmotionsIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item">
                    <span className="menuTitle">Charts</span>
                    <div className="menuIconContainer">
                        <HomeIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item">
                    <span className="menuTitle">User Pages</span>
                    <div className="menuIconContainer">
                        <HomeIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item">
                    <span onClick={() => {setOpenError(!openError)}}>Error Pages</span>
                    <div className="menuIconContainer">
                        {openError ? <KeyboardArrowDownIcon sx={{fontSize:18}} /> : <KeyboardArrowLeftIcon sx={{fontSize:18}} />}
                        <ErrorIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                    {openError ? (
                        <ul>
                            <li className="dropdown" onClick={() => {navigate("/Error404")}}>Error 404</li>
                            <li className="dropdown" onClick={() => {navigate("/Error500")}}>Error 500</li>
                        </ul>
                    ) : null}
                </li>

                <li className="menu-item">
                    <span className="menuTitle">General Pages</span>
                    <div className="menuIconContainer">
                        <HomeIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>

                <li className="menu-item">
                    <span className="menuTitle">Documentation</span>
                    <div className="menuIconContainer">
                        <HomeIcon className='homeIcon' sx={{fontSize:18}} />
                    </div>
                </li>
            </ul>
        </>
    )
}