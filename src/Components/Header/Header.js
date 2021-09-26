import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1><span className="title">CEO'S</span> CLUB FOR UNLUCKY PEOPLES</h1>
            <h2>Total Donation Target: $3,60,000</h2>
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                        CEO'S CLUB
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a href="http://stackoverflow.com" target="_blank" rel="noreferrer">Ceo's Profile</a>
                    <a href="http://stackoverflow.com" target="_blank" rel="noreferrer">Donations</a>
                    <a href="http://stackoverflow.com" target="_blank" rel="noreferrer">Be a member</a>
                    <a href="http://stackoverflow.com" target="_blank" rel="noreferrer">FAQ</a>
                    <a href="http://stackoverflow.com" target="_blank" rel="noreferrer">About Us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;