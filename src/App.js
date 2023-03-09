import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Error404 from "./pages/Error404/Error404";
import Error500 from "./pages/Error500/Error500";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/'>
                      <Route path='' element={<Main />} />
                      <Route path='*' element={<Main />} />
                      <Route path="Error404" element={<Error404 />} />
                      <Route path="Error500" element={<Error500 />} />
                  </Route>
              </Routes >
          </BrowserRouter >
      </>
  )
}

export default App;




// import { useState } from "react";
// import MainMenu from '@mui/material/MainMenu';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
//
// function App() {
//     const [anchor, setAnchor] = useState(null);
//     const options = ["First", "Second", "Third", "Fourth"];
//
//     const [selected, setSelected] = useState(-1);
//
//     const openMenu = (event) => {
//         setAnchor(event.currentTarget);
//     };
//
//     const closeMenu = () => {
//         setAnchor(null);
//     };
//
//     const onMenuItemClick = (event, index) => {
//         setAnchor(null);
//         setSelected(index);
//     };
//     return (
//         <>
//             <Button
//                 onClick={openMenu}
//                 color="primary"
//                 variant="contained"
//             >
//                 Click me
//             </Button>
//
//             <MainMenu
//                 open={Boolean(anchor)}
//                 anchorEl={anchor}
//                 onClose={closeMenu}
//                 keepMounted
//             >
//                 {options.map((option, index) => (
//                     <MenuItem
//                         key={index}
//                         onClick={(event) => onMenuItemClick(event, index)}
//                         selected= {index === selected}
//                     >
//                         {option}
//                     </MenuItem>
//                 ))}
//             </MainMenu>
//         </>
//     );
// }
//
// export default App;