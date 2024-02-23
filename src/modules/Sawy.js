import ProjectCard from "./ProjectCard";

import piano from "../res/pictures/misc/piano_0.jpg"
import hand from "../res/pictures/misc/robot_hand_0.jpg"
import cube from "../res/pictures/misc/cube_solver_0.jpg"

const projectData = [
    {
        key: 1,
        title: "piano",
        description: "[filler text]",
        imageURL: piano
    },
    {
        key: 2,
        title: "robot hand",
        description: "[filler text]",
        imageURL: hand
    },
    {
        key: 3,
        title: "rubik's cube solver",
        description: "[filler text]",
        imageURL: cube
    },
]

let projectCards = [];

projectData.forEach((data) => {
    projectCards.push(<ProjectCard key={data.key} title={data.title} description={data.description} imgSrc={data.imageURL} imgAlt={data.title + " image"}/>);
})

export default function Sawy() {

    return (<>
        <div className="sawy-banner section">
            <img id="sawy-page-banner" className="banner" src={require("../res/pictures/misc/printers_0.jpg")} alt="sawy banner"/>
        </div>
        {projectCards}
    </>);
}