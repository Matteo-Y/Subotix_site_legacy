import ProjectCard from "./ProjectCard";

const projectData = [
    {
        title: "piano",
        description: "[filler text]",
        imageURL: ""
    },
    {
        title: "line follower",
        description: "[filler text]",
        imageURL: ""
    },
    {
        title: "robot hand",
        description: "[filler text]",
        imageURL: ""
    },
    {
        title: "rubik's cube solver",
        description: "[filler text]",
        imageURL: ""
    },
]

let projectCards = [];

projectData.forEach((data) => {
    console.log(projectCards);
    projectCards.push(<ProjectCard title={data.title} description={data.description} imgSrc={data.imageURL} imgAlt={data.title + " image"}/>);
})

export default function Sawy() {

    return (<>
        <div className="sawy-banner section">
            
        </div>
        {projectCards}
    </>);
}