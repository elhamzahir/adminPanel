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
                  </Route>
              </Routes >
          </BrowserRouter >
      </>
  )
}

export default App;






// import React, { useState } from 'react';
// import data from "./data.json";
// import ToDoList from "./ToDoList";
//
// import './App.css';
//
// function App() {
//     const [ toDoList, setToDoList ] = useState(data);
//     const handleToggle = (id) => {
//         let mapped = toDoList.map(task => {
//             return task.id === id ? { ...task, complete: !task.complete } : { ...task};
//         });
//         setToDoList(mapped);
//     }
//
//     const handleFilter = () => {
//         let filtered = toDoList.filter(task => {
//             return !task.complete;
//         });
//         setToDoList(filtered);
//     }
//
//
//     return (
//         <div className="App">
//             <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
//         </div>
//     );
// }
//
// export default App;