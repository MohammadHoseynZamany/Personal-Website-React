import React from "react"
import '../styles/about.css'

export default function About() {
    document.getElementById("title").innerHTML = "About"
    return (
        <div className="aboutContainer">
            <p>
                Hi, I’m Mohammad Hosein!
            </p>
            <p>
                I'm a web developer and a computer engineering student.
            </p>
            <p>
                In a nutshell, I create front-end of websites.
            </p>
            <p>
                In 2019, I entered the field of computer engineering at Yazd University
            </p>
            <p>
                My expertise lies within front-end web apps, and the main languages in my tech stack are React, JavaScript, and of course HTML/CSS.
            </p>
            <p>
                I’m a lifelong learner and love to code, read, swim .
            </p>
        </div>
    )
}