import React, { useState } from "react";
import data from "../../data.json"
import "./ToDoList.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

export default function ToDoList() {
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

    const [input, setInput] = useState("");
    const [completedTaskCount, setCompletedTaskCount] = useState(0)

    const [todoList, setTodoList] = useState(data);
    const handleClick = () => {
        const id = todoList.length + 1;
        setTodoList((prev) => [
            ...data,
            {
                id: id,
                task: input,
                complete: false,
            }
        ]);
        setInput("");
    };
    const handleComplete = (id) => {
        let list = todoList.map((task) => {
            let item = {};
            if (task.id === id) {
                if (!task.complete){
                    setCompletedTaskCount(completedTaskCount + 1);
                }
                else {
                    setCompletedTaskCount(completedTaskCount - 1);
                }
                item = { ...task, complete: !task.complete };
            } else item = { ...task };
            return item;
        });
        setTodoList(list);
    };

    return (
        <div className="todoList">
            {open ? (
                <MainMenu />
            ) : null}
            <div className="todoListContainer">
                <header className="headerContainer">
                    <button className="menuButton" onClick={handleOpen}><MenuIcon className="menuIcon" sx={{fontSize:36}} /></button>
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

                <div className="todoListPageContent">
                    <h3 className="todoListPageTitle">ToDo List</h3>
                    <input className="todoInput" type="text" onInput={(e) =>setInput(e.target.value)} />
                    <button className="todoButton" onClick={handleClick}>Add</button>
                    <div className="todoListDetails">
                        <p><strong>Tasks:</strong> {todoList.length - completedTaskCount}</p>
                    </div>
                    <div className="todosContainer">
                        {todoList.map((todo) => {
                            return (
                                <div className="todos" key={todo.id} id={todo.id}
                                     style={{
                                         textDecoration: todo.complete && "line-through",
                                         color: todo.complete && "#595B5FFF"}}>
                                    <input onChange={(event) => {handleComplete(todo.id);}}
                                           className="todoCheckBox" value={todo.complete} type="checkbox" checked={todo.complete}/>
                                    {todo.task}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};