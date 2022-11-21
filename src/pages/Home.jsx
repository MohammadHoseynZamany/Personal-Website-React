import React from "react"
import '../styles/home.css'

export default function Home(){
    document.getElementById("title").innerHTML = "Home"
    return (
        <div className="homeContainer">
            <h3>Hey, I'm</h3>
            <h1>Mohammad Hosein Zamani</h1>
        </div>
    )
}