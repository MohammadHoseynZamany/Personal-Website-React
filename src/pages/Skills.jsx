import React from "react"
import ReactLogo from "../images/reactLogo.svg"
import JavaScriptLogo from "../images/javascriptLogo.svg"
import HtmlLogo from "../images/htmlLogo.svg"
import CssLogo from "../images/cssLogo.svg"
import PythonLogo from "../images/pythonLogo.svg"
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