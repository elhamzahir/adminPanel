import React, { useState } from "react";
import data from "../../products.json"
import "./Products.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

export default function Products() {
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

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState("");

    const [productList, setProductList] = useState(data);
    const handleClick = () => {
        const id = productList.length + 1;
        setProductList((prev) => [
            ...data,
            {
                id: id,
                name: name,
                details: details,
                price: price
            }
        ]);
        setName("")
        setDetails("")
        setPrice("")
    };

    return (
        <div className="products">
            {open ? (
                <MainMenu />
            ) : null}
            <div className="productsContainer">
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

                <div className="productsPageContent">
                    <h3 className="productsPageTitle">Product List</h3>
                    <div className="productListContainer">
                        <div className="productTitlesContainer">
                            <div className="productTitles">ID</div>
                            <div className="productTitles">Name</div>
                            <div className="productTitles">Details</div>
                            <div className="productTitles">Price</div>
                        </div>
                        {productList.map((product) => {
                            return (
                                <div className="product" key={product.id} id={product.id}>
                                    <div className="productDetails">{product.id}</div>
                                    <div className="productDetails">{product.name}</div>
                                    <div className="productDetails">{product.details}</div>
                                    <div className="productDetails">{product.price} $</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="productsForm">
                        <h3 className="addProductTitle">Add New Product</h3>
                        <label>Product Name:</label>
                        <input className="productsInput" type="text" onInput={(e) =>setName(e.target.value)} />
                        <label>Product Details:</label>
                        <input className="productsInput" type="text" onInput={(e) =>setDetails(e.target.value)} />
                        <label>Product Price:</label>
                        <input className="productsInput" type="text" onInput={(e) =>setPrice(e.target.value)} />
                        <button className="productsButton" onClick={handleClick}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
};














// import React, { useState } from "react";
// import products from "../../products.json"
// import "./Products.css";
// import MainMenu from "../../components/MainMenu/MainMenu";
// import MenuIcon from "@mui/icons-material/Menu";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
//
// export default function Products() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {setOpen(!open);};
//
//     const [anchor, setAnchor] = useState(null);
//     const openMenu = (event) => {setAnchor(event.currentTarget);};
//     const closeMenu = () => {setAnchor(null);};
//
//     const [anchor1, setAnchor1] = useState(null);
//     const openMenu1 = (event) => {setAnchor1(event.currentTarget);};
//     const closeMenu1 = () => {setAnchor1(null);};
//
//     const [anchor2, setAnchor2] = useState(null);
//     const openMenu2 = (event) => {setAnchor2(event.currentTarget);};
//     const closeMenu2 = () => {setAnchor2(null);};
//
//     const [productName, setProductName] = useState("");
//     const [productDetails, setProductDetails] = useState("");
//     const [productPrice, setProductPrice] = useState("");
//     const [productList, setProductList] = useState("");
//     const handleClick = () => {
//         const id = productList.length + 1;
//         setProductList((prev) => [
//             ...products,
//             {
//                 id: id,
//                 name: productName,
//                 details: productDetails,
//                 price: productPrice,
//             }
//         ]);
//         // setInput("");
//     };
//
//     return (
//         <div className="products">
//             {open ? (
//                 <MainMenu />
//             ) : null}
//             <div className="productsContainer">
//                 <header className="headerContainer">
//                     <button className="menuButton" onClick={handleOpen}><MenuIcon className="menuIcon" sx={{fontSize:36}} /></button>
//                     <div className="headerContent">
//
//                         <button className="headerName" onClick={openMenu}>elham zahir <ExpandMoreIcon /></button>
//                         <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={closeMenu} keepMounted>
//                             <MenuItem>Setting</MenuItem>
//                             <MenuItem>Log Out</MenuItem>
//                         </Menu>
//
//                         <button className="notifications" onClick={openMenu1}><NotificationsIcon /> <ExpandMoreIcon /></button>
//                         <Menu open={Boolean(anchor1)} anchorEl={anchor1} onClose={closeMenu1} keepMounted>
//                             <MenuItem>dfghjk</MenuItem>
//                             <MenuItem>xfghjkl</MenuItem>
//                         </Menu>
//
//                         <button className="messages" onClick={openMenu2}><LocalPostOfficeIcon /> <ExpandMoreIcon /></button>
//                         <Menu open={Boolean(anchor2)} anchorEl={anchor2} onClose={closeMenu2} keepMounted>
//                             <MenuItem>bbnsmd,f.g/h</MenuItem>
//                             <MenuItem>fgxhjckbn</MenuItem>
//                         </Menu>
//                     </div>
//                 </header>
//                 <div className="productsPageContent">
//                     <h3 className="productsPageTitle">Products</h3>
//                     <form className="productsForm">
//                         <label>Product Name:</label>
//                         <input className="productsInput" type="text" onInput={(e) =>setProductName(e.target.value)} />
//                         <label>Product Details:</label>
//                         <input className="productsInput" type="text" onInput={(e) =>setProductDetails(e.target.value)} />
//                         <label>Product Price:</label>
//                         <input className="productsInput" type="number" onInput={(e) =>setProductPrice(e.target.value)} />
//                         <button className="productsButton"
//                                 onClick={handleClick}
//                         >Add</button>
//                     </form>
//                     <div className="productListContainer">
//                         {productList.map((todo) => {
//                             return (
//                                 <div className="productList">
//                                     {todo.name}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };