import { SAWY_PATH } from "../App";

export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero section">
                <img style={{marginRight: "5%"}} className="banner" src={require("../res/Banner_0.jpg")}/>
                <div id="about-us-textbox">
                    <h2>about us</h2>
                    <p>[filler text]</p>
                </div>
            </div>
            <div className="sawysawy section">
                <a className="overlay-link" href={SAWY_PATH}></a>
                <div id="sawy-textbox">
                    <h2>sawy sawy</h2>
                    <p>[filler text]</p>
                </div>
                <img style={{marginLeft: "0%"}} className="banner" src={require("../res/Banner_0.jpg")}/>
            </div>
            <div className="contacts section">
                <p>[insert contacts content]</p>
            </div>
        </div>
    );
}