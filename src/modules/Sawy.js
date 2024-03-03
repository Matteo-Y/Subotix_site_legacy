import ProjectCard from "./ProjectCard";

import piano from "../res/pictures/misc/piano_0.jpg";
import robotHand from "../res/pictures/misc/robot_hand_0.jpg";
import cubeSolver from "../res/videos/solver_video_0.mp4";

const projectData = [
    {
        title: "piano",
        description: "",
    },
    {
        title: "robot hand",
        description: "",
    },
    {
        title: "rubik's cube solver",
        description: "",
    },
]

export default function Sawy() {

    return (<>
        <div className="sawy-banner section">
            <img id="sawy-page-banner" className="banner" src={require("../res/pictures/misc/printers_0.jpg")} alt="sawy banner"/>
        </div>

        <ProjectCard title={projectData[0].title} description={projectData[0].description}>
            <img className="project-image" src={piano} alt={projectData[0].title + " content"}/>
        </ProjectCard>
        <ProjectCard title={projectData[1].title} description={projectData[1].description}>
            <img className="project-image" src={robotHand} alt={projectData[0].title + " content"}/>
        </ProjectCard>
        <ProjectCard title={projectData[2].title} description={projectData[2].description}>
            <video className="project-vid" src={cubeSolver} type="video/mp4" autoPlay muted/>
        </ProjectCard>
    </>);
}