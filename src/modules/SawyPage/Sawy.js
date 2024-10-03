import { SAWY_PATH } from "../../App";

export default function Sawy() {
    return <div id="sawy-page">
        <div id="sawy-landing" className="section">
            <video style={{maxWidth: "100%", height: "100%"}} src={require("../SawyPage/res/videos/Sawy-banner-vid.mp4")} type="video/mp4" autoPlay muted loop/>
            <div id="sawy-landing-content">
                <h2 id="sawy-title">the sawy-sawy</h2>
                <a id="apps-link"  className="sawy-link-button" href={"#" + SAWY_PATH + "/web-apps"}> web-apps</a>
                <a id="schem-link" className="sawy-link-button" href={"#" + SAWY_PATH + "/downloads"}>schematics</a>
            </div>
        </div>
        <div style={{height: "500px"}}>

        </div>
        {/*<div id="sawy-disclaimer">
            <h2>disclaimer</h2>
            <p style={{fontSize: "1em", fontWeight: "lighter", padding: "0", margin: "0 50px 20px 50px"}}>the "sawy-sawy" is a visually modified "makey-makey" board produced by joylabz</p>
            <a id="makeymakey-link" style={{fontWeight: "lighter", color: "white"}} href="https://makeymakey.com/pages/about-us" target="none" rel="noreferrer noopener">learn more</a>
        </div>*/}
    </div>;
}