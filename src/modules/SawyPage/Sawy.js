import { SAWY_PATH } from "../../App";
import gearBg from "../SawyPage/res/images/gear.png"
import puzzleBg from "../SawyPage/res/images/puzzle.png"

export default function Sawy() {
    return <div id="sawy-page">
        <div id="sawy-landing" className="section">
            <video style={{maxWidth: "100%", height: "100%"}} src={require("../SawyPage/res/videos/Sawy-banner-vid.mp4")} type="video/mp4" autoPlay muted loop/>
            <div id="sawy-landing-content">
                <h2 id="sawy-title">the sawy-sawy</h2>
                <a id="apps-link"  className="sawy-link-button" href={"#" + SAWY_PATH + "/web-apps"}> web-apps</a>
                <a id="schem-link" className="sawy-link-button" href={"#" + SAWY_PATH + "/downloads"}>schematics</a>
            </div>
        </div>
        <div id="sawy-projects">
            <div id="sawy-projects-header">
                <ProjectCard title="sawy-sawy model" image={require("../SawyPage/res/images/sawy.png")} imageAlt="sawy-thumbnail" reverse="true">
                    sawy-sawy kits cater to different learners. <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>HORIZONTAL</span> projects are accessible to everyone. <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>VERTICAL</span> projects offer advanced challenges.
                </ProjectCard>
            </div>
            <div id="sawy-projects-horizontals">
                <ProjectCard bg={puzzleBg} title="horizontal kits" reverse="false">
                    horizontal projects are user-friendly. they are perfect for beginners. with a focus on basic <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>STEAM</span> principles.
                </ProjectCard>
                <ProjectCard bg={puzzleBg} title="sawy-sawy piano" image={require("../SawyPage/res/images/sawy-piano.png")} imageAlt="piano-thumbnail" reverse="false">
                the piano kit is easy to use and teaches basic circuitry and conductivity.
                </ProjectCard>
                <ProjectCard bg={puzzleBg} title="the saqar" image={require("../SawyPage/res/images/dito.png")} imageAlt="dito-thumbnail" reverse="false">
                    the saqar kit teaches mechanics and equips students for robotics development.
                </ProjectCard>
            </div>
            <div id="sawy-projects-verticals">
                <ProjectCard bg={gearBg} title="vertical kits" reverse="true">
                    vertical projects build on existing skills. they introduce complex concepts, encouraging <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>CRITICAL THINKING</span> and <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>INNOVATION</span>.
                </ProjectCard>
                <ProjectCard bg={gearBg} title="line-follower" reverse="true">
                    the line follower teaches students input/output concepts, and optimization.
                </ProjectCard>
                
            </div>
        </div>
        
    </div>;
}

function ProjectCard(props) {
    return <div className="sawy-project-card" style={{backgroundImage: `url(${props.bg})`, backgroundSize: "cover"}}>
        <h3 className="sawy-project-card-title">{props.title}</h3>
        <div style={props.reverse == "true" ? {display: "flex", flexDirection: "row-reverse"} : {display: "flex", flexDirection: "row"}}>
            <img className="sawy-project-card-thumbnail" src={props.image} alt={props.imageAlt}/>
            <p className="sawy-project-card-description">{props.children}</p>
        </div>
    </div>
}