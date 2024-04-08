import { SAWY_PATH, GALLERY_PATH } from "../App";
import Slideshow from "./Slideshow";

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero section">
                <img className="banner" src={require("../res/pictures/misc/Banner_0.jpg")} alt="home banner"  loading="lazy"/>
            </div>
            
        </div>
    );
}