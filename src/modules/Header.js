
import { useState, useLayoutEffect } from 'react';
import { BASE_PATH, SAWY_PATH } from '../App.js';

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(true);
    const [showHeadermenu, setShowHeadermenu] = useState(true);

    function toggleDropdown() {
        setShowDropdown(!showDropdown);
    }

    return (<>
        <div className="head">
            <button id="dropdown-toggle" onClick={toggleDropdown}><img style={{width: "40px"}} src={require("../res/dropdown.png")} alt="menu"/></button>
            <a href={"#" + BASE_PATH} className="header-element">home</a>
            <a href={"#" + SAWY_PATH} className="header-element">sawysawy</a>
            <h1 id="subotix-header">SUBOTIX</h1>
        </div>
        <div className={"dropdown" + (showDropdown? "" : " collapsed")}>
            <a style={{margin: "10px"}} href={"#" + BASE_PATH} className="dropdown-element">home</a>
            <a style={{margin: "10px"}} href={"#" + SAWY_PATH} className="dropdown-element">sawysawy</a>
        </div>
    </>);
}