import { BASE_PATH } from "../App";

export default function Sawy() {
    return <div id="sawy-page">
        <div id="sawy-landing" className="section">
            <video style={{maxWidth: "100%"}} src={require("../res/videos/sawy-sawy_commercial.mp4")} type="video/mp4" autoPlay muted loop/>
        </div>
        <div id="projects">
            
        </div>
        <div id="workshops">
            <a id="locations-section" className="section" href={"#" + BASE_PATH}>
                <img className="banner" src={require("../res/pictures/gallery/68.jpg")} alt=""/>
                <div id="locations-infobar" className="infobar">
                    <div>
                        <h2>locations</h2>
                        <h3>find us</h3>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </a>
        </div>
    </div>;
}