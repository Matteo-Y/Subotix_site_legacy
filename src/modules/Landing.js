import { SAWY_PATH, GALLERY_PATH } from "../App";
import ProductCard from "./ProductCard";

export default function Landing() {
    return (
        <div className="landing-page">
            <div id="hero-section" className="section">
                <img className="banner" src={require("../res/pictures/gallery/61.jpg")} alt="home banner"  loading="lazy"/>
                <div id="hero-infobar">
                    <h2>subotix</h2>
                    <h3>providing next generation educational tools</h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>
            <div id="product-section" className="section">
                <h2 style={{marginLeft: "10%"}} className="section-title">products</h2>
                <div id="product-card-display">
                    <ProductCard productName="subysaurus" img={require("../res/pictures/gallery/5.jpg")}/>
                    <ProductCard productName="subysaurus" img={require("../res/pictures/gallery/5.jpg")}/>
                    <ProductCard productName="subysaurus" img={require("../res/pictures/gallery/5.jpg")}/>
                    <ProductCard productName="subysaurus" img={require("../res/pictures/gallery/5.jpg")}/>
                </div>
            </div>
            <div id="sawy-section" className="section">
                [insert sawy content]
            </div>
        </div>
    );
}