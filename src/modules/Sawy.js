import { useState } from "react";

export default function Sawy() {

    const [projectsCollapsed, setProjectsCollapsed] = useState(true);

    return <div id="sawy-page">
        <div id="sawy-slide">

        </div>
        <div id="projects" className={(projectsCollapsed ? "collapse" : "")}>
            <div>

            </div>
            <a className={"collapse-button" + (projectsCollapsed ? "collapse" : "")} href="#projects">
                {projectsCollapsed ? "\u2939 show \u2938" : "\u2938 hide \u2939"}
            </a>
        </div>
        <div id="workshops">

        </div>
    </div>;
}