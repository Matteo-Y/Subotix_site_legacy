import { BASE_PATH, SAWY_PATH, STORE_PATH } from "../../App";
import Slideshow from "../Slideshow";

const imageFolder = require.context("../Landing/res/slideshow_1", true);
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
            <a id="sawy-section" className="section" href={"#" + SAWY_PATH}>
                <img style={{objectFit: "cover", width: "100%"}} src={require("../../res/pictures/gallery/67.jpg")} alt="sawy-sawy thumbnail"/>
                <div id="sawy-blank">
                    <div id="sawy-title-div">
                        <h2>subotix <br/>sawy-sawy<br/>initiative</h2>
                    </div>
                    <div style={{direction: "rtl"}} className="blank-paragraph-div">
                        <p style={{fontSize: "0.9em", width: "300px"}}>
                            a mass distribution of sawy-sawy steam kits, aimed to spread 21st century skills to students of all ages
                        </p>
                    </div>
                </div>
            </a>
            <a id="locations-section" className="section" href={"#" + BASE_PATH}>
                <img className="banner" src={require("../../res/pictures/gallery/68.jpg")} alt=""/>
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