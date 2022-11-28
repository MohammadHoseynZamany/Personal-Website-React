import React from "react"
import ReactLogo from "../images/reactLogo.png"
import JavaScriptLogo from "../images/javascriptLogo.png"
import HtmlLogo from "../images/htmlLogo.png"
import CssLogo from "../images/cssLogo.png"
import PythonLogo from "../images/pythonLogo.jpg"
import "../styles/skills.css"

export default function Skills(){
    document.getElementById("title").innerHTML = "Skills"
    return (
        <div className="skillsContainer">
            <div className="reactContainer">
                <img src={ ReactLogo } />
                <p>React</p>
            </div>
            <div className="javaScriptContainer">
                <img src={ JavaScriptLogo } />
                <p>JavaScript</p>
            </div>
            <div className="htmlContainer">
                <img src={ HtmlLogo } />
                <p>Html</p>
            </div>
            <div className="cssContainer">
                <img src={ CssLogo } />
                <p>Css</p>
            </div>
            <div className="pythonContainer">
                <img src={ PythonLogo } />
                <p>Python</p>
            </div>
        </div>
    )
}