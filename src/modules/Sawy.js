import ProjectCard from "./ProjectCard";

import piano from "../res/videos/piano_video_0.mp4";
import robotHand from "../res/videos/robot_hand_1.mp4";
import cubeSolver from "../res/videos/solver_video_0.mp4";
import Slideshow from "./Slideshow";

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

    return <div style={{marginBottom:"50px"}}>
        <Slideshow delay={3000}>
            <img className="slide-image" src={require("../res/pictures/misc/printers_0.jpg")} alt="sawy banner"/>
            <img className="slide-image" src={require("../res/pictures/misc/robot_hand_0.jpg")} alt="sawy banner"/>
            <img className="slide-image" src={require("../res/pictures/misc/controller_0.jpeg")} alt="sawy banner"/>
            <img className="slide-image" src={require("../res/pictures/misc/cube_solver_1.jpg")} alt="sawy banner"/>
        </Slideshow>

        <ProjectCard title={projectData[0].title} description={projectData[0].description}>
            <video className="project-vid" src={piano} type="video/mp4" autoPlay muted loop/>
        </ProjectCard>
        <ProjectCard title={projectData[1].title} description={projectData[1].description}>
            <video className="project-vid" src={robotHand} type="video/mp4" autoPlay muted loop/>
        </ProjectCard>
        <ProjectCard title={projectData[2].title} description={projectData[2].description}>
            <video className="project-vid" src={cubeSolver} type="video/mp4" autoPlay muted loop/>
        </ProjectCard>
    </div>;
}