import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <img src={logo} />
           <nav>
                <ul>
                    <li><a href=''>Shop</a></li>
                    <li><a href=''>Order Review</a></li>
                    <li><a href=''>Manage Inventory</a></li>
                </ul>
           </nav>
        </div>
    );
};

export default Header;