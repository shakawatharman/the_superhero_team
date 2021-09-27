import React from 'react';
import logo from '../../logo.png';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="logo"/>
                <h2>All supporting member</h2>
                <h3>Total Budget : $250000</h3>
            </div>
        </header>
    );
};

export default Header;