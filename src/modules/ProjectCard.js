
export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <img className="project-image" src={props.imgSrc} alt={props.imgAlt}/>
            <div className="project-textbox">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}