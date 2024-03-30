
import { useState, useLayoutEffect } from 'react';
import { BASE_PATH, SAWY_PATH, SOCIALS } from '../App.js';

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    function toggleDropdown() {
        setShowDropdown(!showDropdown);
    }

    return (<>
        <div className="head">
            <div id="header-menu">
                <button className="dropdown-toggle glow-on-hover" onClick={toggleDropdown}>
                    <div style={{ top: "5px" }} className="dropdown-toggle"></div>
                    <div style={{ top: "10px" }} className="dropdown-toggle"></div>
                    <div style={{ top: "15px" }} className="dropdown-toggle"></div>
                </button>
                <a href={"#" + BASE_PATH} className="header-element glow-on-hover">home</a>
                <a href={"#" + SAWY_PATH} className="header-element glow-on-hover">sawysawy</a>
            </div>
            <div id="header-title">
                <h1>SUBOTIX</h1>
            </div>
            <div id="header-socials" className="header-element">
                <a style={{marginRight: "20px"}} href={SOCIALS.facebook}  target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/FB-logo.webp")} alt="facebook"/></a>
                <a style={{marginRight: "20px"}} href={SOCIALS.instagram} target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/INSTA-logo.webp")} alt="instagram"/></a>
                <a style={{marginRight: "20px"}} href={SOCIALS.x}         target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/X-logo.webp")} alt="facebook"/></a>
                <a style={{marginRight: "20px"}} href={SOCIALS.youtube}   target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/YT-logo.webp")} alt="instagram"/></a>
            </div>
        </div>
        <div className={"dropdown" + (showDropdown? "" : " collapsed")}>
            <a style={{margin: "10px"}} href={"#" + BASE_PATH} className="dropdown-element">home</a>
            <a style={{margin: "10px"}} href={"#" + SAWY_PATH} className="dropdown-element">sawysawy</a>
        </div>
    </>);
}