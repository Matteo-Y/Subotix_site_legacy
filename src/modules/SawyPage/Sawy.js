import { SAWY_PATH } from "../../App";

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
                <ProjectCard title="horizontal kits" reverse="false">
                    horizontal projects are user-friendly. they are perfect for beginners. with a focus on basic <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>STEAM</span> principles.
                </ProjectCard>
                <ProjectCard title="sawy-sawy piano" image={require("../SawyPage/res/images/sawy-piano.png")} imageAlt="piano-thumbnail" reverse="false">
                    the sawy-sawy piano kit is easy to use. it teaches basic concepts like conductivity, circuits and inputs.
                </ProjectCard>
                <ProjectCard title="the saqar" image={require("../SawyPage/res/images/dito.png")} imageAlt="dito-thumbnail" reverse="false">
                    the sawy-sawy robot finger kit teaches essential skills in mechanics and actuators, equipping users for more advanced robotics projects.
                </ProjectCard>
            </div>
            <div id="sawy-projects-verticals">
                <ProjectCard title="vertical kits" reverse="true">
                    vertical projects build on existing skills. they introduce complex concepts, encouraging <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>CRITICAL THINKING</span> and <span style={{fontFamily: "roboto", fontWeight: "bolder"}}>INNOVATION</span>.
                </ProjectCard>
                <ProjectCard title="line-follower" reverse="true">
                the line follower kit teaches you skills in robotics and automation. users will explore input/output concepts and optimize their robot’s performance.
                </ProjectCard>
                
            </div>
        </div>
        
    </div>;
}

function ProjectCard(props) {
    return <div className="sawy-project-card">
        <h3 className="sawy-project-card-title">{props.title}</h3>
        <div style={props.reverse == "true" ? {display: "flex", flexDirection: "row-reverse"} : {display: "flex", flexDirection: "row"}}>
            <img className="sawy-project-card-thumbnail" src={props.image} alt={props.imageAlt}/>
            <p className="sawy-project-card-description">{props.children}</p>
        </div>
    </div>
}