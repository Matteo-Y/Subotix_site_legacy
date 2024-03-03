
export default function ProjectCard(props) {
    console.log(props.children);
    return (
        <div className="project-card">
            {props.children}
            <div className="project-textbox">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}