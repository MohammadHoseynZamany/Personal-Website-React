import React from "react"
import "../styles/projects.css"

export default function Projects(){
    document.getElementById("title").innerHTML = "Projects"
    return (
        <div className="projectsContainer">
            <a target="_blank" href="https://jahancabinet.netlify.app/">Jahan Cabinet Web site</a>
        </div>
    )
}