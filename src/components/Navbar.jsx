import React from "react"
import { Link, BrowserRouter, Outlet } from "react-router-dom"
import Logo from "../images/Logo.png"
import '../styles/nav.css'

export default function Navbar() {
    return (
        <>
            <div className="navContainer">
                <img src={Logo} />
                <div className="linksContainer">
                    <Link to="/" className="navLink" id="navHome" >Home</Link>
                    <Link to="/About" className="navLink" id="navAbout" >About</Link>
                    <Link to="/Contact" className="navLink" id="navContact" >Contact</Link>
                    <Link to="/Skills" className="navLink" id="navSkills" >Skills</Link>
                    <Link to="Projects" className="navLink" id="navProjects" >Projects</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}