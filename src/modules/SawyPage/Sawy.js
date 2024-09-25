import { SAWY_PATH } from "../../App";

export default function Sawy() {
    return <div id="sawy-page">
        <div id="content-section">
            <a id="webapp-redirect" className="content-panel" href={"#" + SAWY_PATH + "/web-apps"}>apps </a>
            <a id="code-redirect" className="content-panel" href={"#" + SAWY_PATH + "/downloads"}>schematics  </a>
            <a id="gallery-redirect" className="content-panel" href={"#" + SAWY_PATH + "/gallery"}>gallery </a>
        </div>
        <div id="sawy-landing" className="section">
            <video style={{maxWidth: "100%"}} src={require("../SawyPage/res/videos/sawy-sawy_commercial.mp4")} type="video/mp4" autoPlay muted loop/>
        </div>
        <div id="workshops">
            <a id="locations-section" className="section hover-section" href={"#" + SAWY_PATH}>
                <img className="banner" src={require("../SawyPage/res/images/78.jpg")} alt=""/>
                <div id="locations-infobar" className="infobar">
                    <div style={{ height: "170px" }}>
                        <h2>workshops</h2>
                    </div>
                    <p>the standard chunk of lorem ipsum used since the 1500s is reproduced below for those interested. sections 1.10.32 and 1.10.33 from "de finibus bonorum et malorum" by cicero are also reproduced in their exact original form, accompanied by english versions from the 1914 translation by h. rackham.</p>
                </div>
            </a>
        </div>
        <div id="sawy-disclaimer">
            <h2>disclaimer</h2>
            <p style={{fontSize: "1em", fontWeight: "lighter", padding: "0", margin: "0 50px 20px 50px"}}>the "sawy-sawy" is a visually modified "makey-makey" board produced by joylabz</p>
            <a id="makeymakey-link" style={{fontWeight: "lighter", color: "white"}} href="https://makeymakey.com/pages/about-us" target="none" rel="noreferrer noopener">learn more</a>
        </div>
    </div>;
}