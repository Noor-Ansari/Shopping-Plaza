import React, {useContext} from 'react';
import "./Navbar.css";
import {Context} from "../Context";
import {Link} from "react-router-dom";

function Navbar() {
    const context = useContext(Context);
    return (
        <header className="nav-wrapper">
            <Link id="brand" to="/">Shopping Plaza</Link>    
            <nav>
                <ul className="nav_links"> 
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/cart" className="link">My cart ({context.cart.length})</Link></li>
                </ul>  
            </nav> 
        </header>
    )
}
export default Navbar;