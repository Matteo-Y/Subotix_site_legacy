import { SAWY_PATH, GALLERY_PATH } from "../App";
import ProductCard from "./ProductCard";

export default function Landing() {
    return (
        <div className="landing-page">
            <div id="hero-section" className="section">
                <img className="banner" src={require("../res/pictures/gallery/48.jpg")} alt="home banner"  loading="lazy"/>
                <div id="hero-infobar" className="infobar">
                    <div>
                        <h2>subotix</h2>
                        <h3 style={{ width: "80%" }}>providing a next-gen education</h3>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>
            <div id="product-section" className="section">
                <h2 style={{marginLeft: "10%"}} className="section-title">products</h2>
                <div id="product-card-display">
                    <ProductCard productName="sawysawy"        img={require("../res/pictures/gallery/63.jpg")}/>
                    <ProductCard productName="subysaurus"      img={require("../res/pictures/gallery/5.jpg")}/>
                    <ProductCard productName="robot hand kit"  img={require("../res/pictures/gallery/64.jpg")}/>
                    <ProductCard productName="starship models" img={require("../res/pictures/gallery/65.jpg")}/>
                </div>
            </div>
            <a id="sawy-section" className="section" href={"#" + SAWY_PATH}>
                <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "collumn", flex: "1 1 0"}}>
                        <img className="sawy-image" src={require("../res/pictures/gallery/3.jpg")} alt=""/>
                    </div>
                    <div style={{display: "flex", flexDirection: "collumn", flex: "1 1 0"}}>
                        <img className="sawy-image" src={require("../res/pictures/gallery/40.jpg")} alt=""/>
                    </div>
                    <div style={{display: "flex", flexDirection: "collumn", flex: "1 1 0"}}>
                        <img className="sawy-image" src={require("../res/pictures/gallery/61.jpg")} alt=""/>
                    </div>
                </div>
                <div id="sawy-infobar" className="infobar">
                    <div>
                        <h2>sawy-sawy</h2>
                        <h3>out of the box ready microcontroller</h3>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </a>
            <a id="locations-section" className="section" href={"#" + SAWY_PATH}>
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
    );
}