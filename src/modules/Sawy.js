import { SAWY_PATH } from "../App";

export default function Sawy() {
    return <div id="sawy-page">
        <div id="sawy-landing" className="section">
            <video style={{maxWidth: "100%"}} src={require("../res/videos/sawy-sawy_commercial.mp4")} type="video/mp4" autoPlay muted loop/>
        </div>
        <div id="showcase" className="section">
            <div style={{width: "30%", marginLeft: "20%", padding: "70px 0 0 70px"}}>
                <h2>the sawy-sawy</h2>
                <ul>
                    <li>accessible learning for all ages</li><br/>
                    <li>educator professional development</li><br/>
                    <li>steam integration for creativity</li>
                </ul>
            </div>
            <img style={{width: "30%", marginRight: "20%"}} src={require("../res/pictures/ui/sawy.png")} alt=""/>
        </div>
        <div id="content-section" className="section">
            <div id="webapp-redirect" className="sawy-sub-section">
                <img style={{width: "100%", objectFit: "cover"}} src={require("../res/pictures/misc/Screenshot (2).png")} alt=""/>
                <div style={{position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", textAlign: "center"}}>
                    <h2>webapps</h2>
                </div>
            </div>
            <div id="code-redirect" className="sawy-sub-section">
                <img style={{width: "100%", objectFit: "cover"}} src={require("../res/pictures/misc/Screenshot (2).png")} alt=""/>
                <div style={{position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", textAlign: "center"}}>
                    <h2>files</h2>
                </div>
            </div>
            <div id="gallery-redirect" className="sawy-sub-section">
                <img style={{width: "100%", objectFit: "cover"}} src={require("../res/pictures/gallery/67.jpg")} alt=""/>
                <div style={{position: "absolute", bottom: "0", backgroundColor: "black", width: "100%", textAlign: "center"}}>
                    <h2>gallery</h2>
                </div>
            </div>
        </div>
        <div id="workshops">
            <a id="locations-section" className="section" href={"#" + SAWY_PATH}>
                <img className="banner" src={require("../res/pictures/gallery/78.jpg")} alt=""/>
                <div id="locations-infobar" className="infobar">
                    <div style={{ height: "170px" }}>
                        <h2>workshops</h2>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </a>
        </div>
    </div>;
}