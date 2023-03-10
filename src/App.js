import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Error404 from "./pages/Error404/Error404";
import Error500 from "./pages/Error500/Error500";
import Icons from "./pages/Icons/Icons";
import Charts from "./pages/Charts/Charts";
import Tables from "./pages/Tables/Tables";
import ToDoList from "./pages/ToDoList/ToDoList";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Forms from "./pages/Forms/Forms";
import Products from "./pages/Products/Products";

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
                      <Route path="Icons" element={<Icons />} />
                      <Route path="Charts" element={<Charts />} />
                      <Route path="Tables" element={<Tables />} />
                      <Route path="ToDoList" element={<ToDoList />} />
                      <Route path="SignIn" element={<SignIn />} />
                      <Route path="SignUp" element={<SignUp />} />
                      <Route path="Forms" element={<Forms />} />
                      <Route path="Products" element={<Products />} />
                  </Route>
              </Routes >
          </BrowserRouter >
      </>
  )
}

export default App;