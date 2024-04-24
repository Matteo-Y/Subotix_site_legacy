import { BASE_PATH, SAWY_PATH, STORE_PATH } from "../App";
import ProductCard from "./ProductCard";
import Slideshow from "./slide/Slideshow";

const imageFolder = require.context("../res/pictures/gallery/slideshow_1", true);
const imageList = imageFolder.keys().map(image => imageFolder(image));

export default function Landing() {

    return (
        <div className="landing-page">
            <div id="hero-section" className="section">
                <div id="hero-blank">
                    <div id="hero-title-div">
                        <h2>next-gen <br/>education</h2>
                    </div>
                    <div className="blank-paragraph-div">
                        <p>
                            researching, designing, and implementing impactful and scalable steam solutions for your community
                        </p>
                    </div>
                    <div id="hero-links-div">
                        <a className="hero-link" href={"#" + SAWY_PATH}>
                            <img width="90%" src={require("../res/pictures/ui/sawy_wire.png")}/>
                            <p>sawy-sawy</p>
                        </a>
                        <a className="hero-link" href={"#" + SAWY_PATH + "/downloads"}>
                            <img width="40%" src={require("../res/pictures/ui/file_wire.png")}/>
                            <p>resources</p>
                        </a>
                        <a className="hero-link" href={"#" + STORE_PATH}>
                            <img width="40%" src={require("../res/pictures/ui/bag_wire.png")}/>
                            <p>store</p>
                        </a>
                    </div>
                </div>
                <Slideshow style={{height: "730px"}} imageList={imageList} delay={10000}/>
            </div>
            <a id="sawy-section" className="section hover-section" href={"#" + SAWY_PATH}>
                <img style={{objectFit: "cover", width: "100%"}} src={require("../res/pictures/gallery/67.jpg")} alt="sawy-sawy thumbnail"/>
                <div id="sawy-blank">
                    <div id="sawy-title-div">
                        <h2>subotix <br/>sawy-sawy</h2>
                    </div>
                    <div style={{direction: "rtl"}} className="blank-paragraph-div">
                        <p>
                            the sawy sawy brings interactivity to all ages, turning ordinary objects into tools for exploration and fun
                        </p>
                    </div>
                    <img style={{position: "absolute", right: "-60px", top: "150px"}} width="50px" src={require("../res/pictures/ui/arrow.png")} />
                </div>
            </a>
            <div id="product-section" className="section">
                <h2 style={{marginLeft: "10%"}} className="section-title">products</h2>
                <div id="product-card-display">
                    <ProductCard productName="sawysawy"        link={"#" + SAWY_PATH} img={require("../res/pictures/gallery/63.jpg")}/>
                    <ProductCard productName="subysaurus"      link={"#" + STORE_PATH} img={require("../res/pictures/gallery/5.jpg")}/>
                    <ProductCard productName="robot hand kit"  link={"#" + STORE_PATH} img={require("../res/pictures/gallery/64.jpg")}/>
                    <ProductCard productName="starship models" link={"#" + STORE_PATH} img={require("../res/pictures/gallery/65.jpg")}/>
                </div>
            </div>
            <a id="locations-section" className="section hover-section" href={"#" + BASE_PATH}>
                <img className="banner" src={require("../res/pictures/gallery/68.jpg")} alt=""/>
                <div id="locations-infobar" className="infobar">
                    <div style={{ height: "170px" }}>
                        <h2>locations</h2>
                        <h3>visit us</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}