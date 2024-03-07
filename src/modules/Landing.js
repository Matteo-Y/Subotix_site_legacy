import { SAWY_PATH } from "../App";

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero section">
                <img style={{marginRight: "5%"}} className="banner" src={require("../res/pictures/misc/Banner_0.jpg")} alt="home banner"/>
                <div id="about-us-textbox">
                    <h2>about us</h2>
                    <p>[filler text]</p>
                </div>
            </div>
            <a className="sawysawy section" href={"#" + SAWY_PATH}>
                <div id="sawy-textbox">
                    <h2>sawy sawy</h2>
                    <p>
                        the perfect tool for beginners.<br/>
                        a good lesson in conductivity, <br/>
                        and basic circuitry.
                    </p>
                </div>
                <img className="banner" src={require("../res/pictures/misc/controller_0.jpeg")} alt="sawy banner"/>
            </a>
        </div>
    );
}