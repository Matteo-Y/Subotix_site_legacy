import { SAWY_PATH, GALLERY_PATH } from "../App";
import Slideshow from "./Slideshow";

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero section">
                <img style={{marginRight: "5%"}} className="banner" src={require("../res/pictures/misc/Banner_0.jpg")} alt="home banner"/>
                <div id="about-us-textbox">
                    <h2>about us</h2>
                    <p>
                       we create and manufacture innovative stem<br/>
                       products to provide a next generation education
                    </p>
                </div>
            </div>
            <a className="redirect-section section" href={"#" + SAWY_PATH}>
                <div id="sawy-textbox">
                    <h2>sawy sawy</h2>
                    <p>
                        the perfect tool for beginners.<br/>
                        a good lesson in conductivity, <br/>
                        and basic circuitry.
                    </p>
                </div>
                <video className="banner" src={require("../res/videos/sawy-sawy_commercial.mp4")} type="video/mp4" autoPlay muted loop/>
            </a>
            <a className="redirect-section reverse section" href={"#" + GALLERY_PATH}>
                <div id="gallery-textbox">
                    <h2>gallery</h2>
                    <p>
                        a collection of projects<br/>
                        and activities subotix has<br/> 
                        been a part of.
                    </p>
                </div>
                <div id="gallery-slideshow">
                    <Slideshow delay={5000}>
                        <img className="slide-image" src={require("../res/pictures/misc/printers_0.jpg")} alt="sawy banner"/>
                        <img className="slide-image" src={require("../res/pictures/misc/robot_hand_0.jpg")} alt="sawy banner"/>
                        <img className="slide-image" src={require("../res/pictures/misc/controller_0.jpeg")} alt="sawy banner"/>
                    </Slideshow>
                </div>
            </a>
        </div>
    );
}