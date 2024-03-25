
import { useState, useLayoutEffect } from 'react';
import { BASE_PATH, SAWY_PATH } from '../App.js';

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    function toggleDropdown() {
        setShowDropdown(!showDropdown);
    }

    return (<>
        <div className="head">
            <div id="header-menu">
                <button id="dropdown-toggle" onClick={toggleDropdown}><img style={{width: "40px"}} src={require("../res/pictures/ui/dropdown.png")} alt="menu"/></button>
                <a href={"#" + BASE_PATH} className="header-element">home</a>
                <a href={"#" + SAWY_PATH} className="header-element">sawysawy</a>
            </div>
            <div id="header-title">
                <h1>SUBOTIX</h1>
            </div>
            <div id="header-socials">
                <a style={{marginRight: "20px"}} href="https://www.facebook.com/SUBOTIX" target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/FB-logo.webp")} alt="facebook"/></a>
                <a style={{marginRight: "20px"}} href="https://www.instagram.com/saudisubotix/" target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/INSTA-logo.webp")} alt="instagram"/></a>
                <a style={{marginRight: "20px"}} href="https://twitter.com/MSXBocaChica" target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/X-logo.webp")} alt="facebook"/></a>
                <a style={{marginRight: "20px"}} href="https://www.youtube.com/@subotix" target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/YT-logo.webp")} alt="instagram"/></a>
            </div>
        </div>
        <div className={"dropdown" + (showDropdown? "" : " collapsed")}>
            <a style={{margin: "10px"}} href={"#" + BASE_PATH} className="dropdown-element">home</a>
            <a style={{margin: "10px"}} href={"#" + SAWY_PATH} className="dropdown-element">sawysawy</a>
        </div>
    </>);
}