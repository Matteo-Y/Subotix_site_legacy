
import { SAWY_PATH, SOCIALS, STORE_PATH } from '../App.js';

export default function Header() {
    return (<>
        <div className="head">
            <div id="header-menu">
                <a href={"#" + SAWY_PATH} className="header-element glow-on-hover">sawysawy</a>
                
            </div>
            <div id="header-title">
                <a href="#/"><h1>SUBOTIX</h1></a>
            </div>
            <div id="header-socials" className="header-element">
                <a style={{marginRight: "20px"}} href={SOCIALS.facebook}  target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/FB-logo.webp")} alt="facebook"/></a>
                <a style={{marginRight: "20px"}} href={SOCIALS.instagram} target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/INSTA-logo.webp")} alt="instagram"/></a>
                <a style={{marginRight: "20px"}} href={SOCIALS.x}         target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/X-logo.webp")} alt="facebook"/></a>
                <a style={{marginRight: "20px"}} href={SOCIALS.youtube}   target="_blank" rel="noreferrer noopener"><img style={{width: "40px"}} src={require("../res/pictures/ui/YT-logo.webp")} alt="instagram"/></a>
            </div>
        </div>
    </>);
}