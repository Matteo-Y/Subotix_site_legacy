import { BASE_PATH, SAWY_PATH, STORE_PATH } from "../../App";
import Slideshow from "../Slideshow";

const imageFolder = require.context("../Landing/res/images/hero_slidereel", true);
const imageList = imageFolder.keys().map(image => imageFolder(image));

export default function Landing() {

    return (
        <div className="landing-page">
            <div id="hero-section" className="section">
                <div id="hero-title-div">
                    <h2>your <br/>next-gen <br/>education</h2>
                </div>
                <div id="blank-paragraph-div">
                    <p>
                        <span style={{fontFamily: "roboto",fontSize: "1.5em", fontWeight: "bold"}}>RESEARCHING <br/>DESIGNING <br/>IMPLEMENTING</span> <br/>impactful steam solutions <br/>for your community
                    </p>
                </div>
                <div id="hero-links-div">
                    <a className="hero-link" href={"#" + SAWY_PATH}>sawy-sawy</a>
                    <a className="hero-link" href={"#" + SAWY_PATH + "/downloads"}>resources</a>
                    <a className="hero-link" href={"#" + STORE_PATH}>store</a>
                </div>
                <div id="hero-slide">
                    <Slideshow style={{height: "100%"}} imageList={imageList} delay={10000}/>
                </div>
            </div>

            <div id="sawy-section" className="section">
                <div class="sawy-sec-thumbnail" style={{gridArea: "image-1"}}><img src={require("../Landing/res/images/sawy_thumbnails/sawy_thumbnail.jpg")} alt="sawy-sawy thumbnail"/></div>
                <div class="sawy-sec-thumbnail" style={{gridArea: "image-2"}}><img src={require("../Landing/res/images/sawy_thumbnails/1.jpg")} alt="sawy-sawy thumbnail"/></div>
                <div class="sawy-sec-thumbnail" style={{gridArea: "image-3"}}><img src={require("../Landing/res/images/sawy_thumbnails/2.jpg")} alt="sawy-sawy thumbnail"/></div>
                <div class="sawy-sec-thumbnail" style={{gridArea: "image-4"}}><img src={require("../Landing/res/images/sawy_thumbnails/3.jpg")} alt="sawy-sawy thumbnail"/></div>
                <div id="sawy-title-div">
                    <h2 className="sawy-sec-text">subotix <br/>sawy-sawy<br/>initiative</h2>
                </div>
                <div id="sawy-paragraph-div" className="blank-paragraph-div">
                    <p className="sawy-sec-text" style={{fontSize: "1em", lineHeight: "1.7em", width: "350px", margin: "auto"}}>
                        a mass distribution of sawy-sawy steam kits, aimed to spread 21st century skills to students of all ages
                    </p>
                    <a id="sawy-link" href={"#" + SAWY_PATH}>learn more</a>
                </div>
                <div>

                </div>
            </div>
            
            <div id="showcase"> 
                <div className="showcase-panel">
                    <div className="showcase-panel-image"><img src={require("../Landing/res/images/showcase_thumbnails/1.jpeg")} alt="Al-Hammad Schools workshop"/></div>
                    <div className="showcase-panel-text">
                        <h2>stuff</h2>
                        <p>stuffstuffstuffstuffstuffstuff</p>
                    </div>
                </div>
            </div>
        </div>
    );
}