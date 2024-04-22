import { SAWY_PATH } from "../App";

export default function Sawy() {
    return <div id="sawy-page">
        <div id="sawy-landing" className="section">
            <video style={{maxWidth: "100%"}} src={require("../res/videos/sawy-sawy_commercial.mp4")} type="video/mp4" autoPlay muted loop/>
        </div>
        <div id="showcase" className="section">
            <div id="showcase-textbox">
                <h2>sawy-sawy</h2><br/>
                <ul>
                    <li>accessible learning for all ages</li><br/><br/>
                    <li>educator professional development</li><br/><br/>
                    <li>steam integration for creativity</li>
                </ul>
            </div>
            <img id="sawy-svg" style={{width: "30%", marginRight: "20%"}} src={require("../res/pictures/ui/sawy.png")} alt=""/>
        </div>
        <div id="content-section" className="section">
            <a id="webapp-redirect" className="sawy-sub-section" href={"#" + SAWY_PATH + "/web-apps"}>
                <img style={{width: "100%", objectFit: "cover"}} src={require("../res/pictures/gallery/62.jpg")} alt=""/>
                <div style={{position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", textAlign: "center"}}>
                    <h2>webapps</h2>
                </div>
            </a>
            <a id="code-redirect" className="sawy-sub-section" href={"#" + SAWY_PATH + "/downloads"}>
                <img style={{width: "100%", objectFit: "cover"}} src={require("../res/pictures/misc/Screenshot (2).png")} alt=""/>
                <div style={{position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", textAlign: "center"}}>
                    <h2>files</h2>
                </div>
            </a>
            <a id="gallery-redirect" className="sawy-sub-section" href={"#" + SAWY_PATH + "/gallery"}>
                <img style={{width: "100%", objectFit: "cover"}} src={require("../res/pictures/gallery/67.jpg")} alt=""/>
                <div style={{position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", textAlign: "center"}}>
                    <h2>gallery</h2>
                </div>
            </a>
        </div>
        <div id="workshops">
            <a id="locations-section" className="section hover-section" href={"#" + SAWY_PATH}>
                <img className="banner" src={require("../res/pictures/gallery/78.jpg")} alt=""/>
                <div id="locations-infobar" className="infobar">
                    <div style={{ height: "170px" }}>
                        <h2>workshops</h2>
                    </div>
                    <p>the standard chunk of lorem ipsum used since the 1500s is reproduced below for those interested. sections 1.10.32 and 1.10.33 from "de finibus bonorum et malorum" by cicero are also reproduced in their exact original form, accompanied by english versions from the 1914 translation by h. rackham.</p>
                </div>
            </a>
        </div>
    </div>;
}