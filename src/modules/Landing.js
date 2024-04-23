import { BASE_PATH, SAWY_PATH, STORE_PATH } from "../App";
import ProductCard from "./ProductCard";
import { HashLink } from "react-router-hash-link";
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
                    <div id="hero-paragraph-div">
                        <p>
                            researching, designing, and implementing impactful and scalable steam solutions for your community
                        </p>
                    </div>
                    <div id="hero-links-div">
                        <a className="hero-link" href={"#" + SAWY_PATH}>
                            <img width="90%" src={require("../res/pictures/ui/sawy_wire.png")}/>
                            sawy-sawy
                        </a>
                        <a className="hero-link" href={"#" + SAWY_PATH + "/downloads"}>
                            <img width="40%" src={require("../res/pictures/ui/file_wire.png")}/>
                            resources
                        </a>
                        <a className="hero-link" href={"#" + STORE_PATH}>
                            <img width="40%" src={require("../res/pictures/ui/bag_wire.png")}/>
                            store
                        </a>
                    </div>
                </div>
                <Slideshow style={{height: "730px"}} imageList={imageList} delay={10000}/>
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
                    <p>
                    the flagship subotix product. the sawy sawy brings interactivity to all ages, turning ordinary objects into tools for exploration and fun.
                    unlock limitless creativity with sawy sawy.
                    </p>
                </div>
            </a>
            <div id="product-section" className="section">
                <h2 style={{marginLeft: "10%"}} className="section-title">products</h2>
                <div id="product-card-display">
                    <ProductCard productName="sawysawy"        img={require("../res/pictures/gallery/63.jpg")}/>
                    <ProductCard productName="subysaurus"      img={require("../res/pictures/gallery/5.jpg")}/>
                    <ProductCard productName="robot hand kit"  img={require("../res/pictures/gallery/64.jpg")}/>
                    <ProductCard productName="starship models" img={require("../res/pictures/gallery/65.jpg")}/>
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