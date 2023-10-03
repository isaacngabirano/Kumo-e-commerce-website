import React from "react";
import logo from './assets/logo.png'

export default function NavBar(){
return(
    
    <div className="nav-bar">
    <img src={logo} className="logo"/>
        <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Shop</li></a>
            <a href="#"><li>Products</li></a>
            <a href="#"><li>Pages</li></a>
        </ul>
        <div class="nav-icon">
            <a href="#"><i class='bx bx-search'></i></a>
            <a href="#"><i class='bx bx-user' ></i></a>
            <a href="#"><i class='bx bx-cart' ></i></a>

            <div class="bx bx-menu" id="menu-icon"></div>
        </div>
    </div>
    
)
}