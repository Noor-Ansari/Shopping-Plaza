import React, {useContext} from 'react';
import "./Navbar.css";
import {Context} from "../Context";

function Navbar() {
    const context = useContext(Context);

    function clickHandler(action){
        context.setPage(action)
    }

    return (
        <header className="nav-wrapper">
            <a id="brand" href="/">Shopping Plaza</a>    
            <nav>
                <ul className="nav_links"> 
                    <li><button id="home" onClick={()=>clickHandler("product")}>Home</button></li>
                    <li><button id="cart" onClick={()=>clickHandler("cart")}>My cart ({context.cart.length})</button></li>
                </ul>  
            </nav> 
        </header>
    )
}

export default Navbar;
