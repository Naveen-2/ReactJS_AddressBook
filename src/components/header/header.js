import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.jpeg";

export default function Header() {
    return (
        <header className="header-content header">
            <div className="logo-content">
                <img src={logo} alt="logo" />
                <div>
                    <span className="addressBook-text">Address</span><br />
                    <span className="addressBook-text addressBook-book">Book</span>
                </div>
            </div>
        </header>
    )
}