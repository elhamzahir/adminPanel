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