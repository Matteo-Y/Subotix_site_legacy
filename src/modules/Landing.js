import { BASE_PATH, SAWY_PATH } from "../App";
import ProductCard from "./ProductCard";
import { HashLink } from "react-router-hash-link";

export default function Landing() {

    return (
        <div className="landing-page">
            <div id="hero-section" className="section">
                <div id="hero-blank">
                    <div id="hero-title-div">
                        <h2>next-gen <br/>education</h2>
                    </div>
                    <div id="hero-paragraph-div">
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    </div>
                    <div id="hero-links-div">
                        <HashLink className="hero-link" smooth to="#product-section">store</HashLink>
                        <HashLink className="hero-link" smooth to="#locations-section">location</HashLink>
                        <HashLink className="hero-link" smooth to="#contact">contact</HashLink>
                    </div>
                </div>
                <img className="banner" src={require("../res/pictures/gallery/48.jpg")} alt="home banner"  loading="lazy"/>
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
            <a id="sawy-section" className="section hover-section" href={"#" + SAWY_PATH}>
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
                    <div style={{ height: "170px" }}>
                        <h2>sawy-sawy</h2>
                        <h3>out of the box ready microcontroller</h3>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </a>
            <a id="locations-section" className="section hover-section" href={"#" + BASE_PATH}>
                <img className="banner" src={require("../res/pictures/gallery/68.jpg")} alt=""/>
                <div id="locations-infobar" className="infobar">
                    <div style={{ height: "170px" }}>
                        <h2>locations</h2>
                        <h3>visit us</h3>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </a>
        </div>
    );
}