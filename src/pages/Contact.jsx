import React from "react"
import GitHubLogo from "../images/gitHub.png"
import GmailLogo from "../images/gmail.png"
import TelegramLogo from "../images/telegram.png"
import PhoneLogo from "../images/phone.png"
import "../styles/contact.css"

export default function Contact(){
    document.getElementById("title").innerHTML = "Contact"
    return (
        <div className="contactContainer">
            <a href="https://github.com/mohammadhoseynzamany" id="gitHub" target="_blank">
                <img src={ GitHubLogo } />
                <h3>https://github.com/mohammadhoseynzamany</h3>
            </a>
            <a href="https://mohammadhoseynzamany@gmail.com" id="gmail" target="_blank">
                <img src={ GmailLogo } />
                <h3>mohammadhoseynzamany@gmail.com</h3>
            </a>
            <a href="http://t.me/mohammadhoseynzamany" id="telegram" target="_blank">
                <img src={ TelegramLogo } />
                <h3>@mohammadhoseynzamany</h3>
            </a>
            <a href="tel:09130833494" id="telegram" target="_blank">
                <img src={ PhoneLogo } />
                <h3>09130833494</h3>
            </a>
        </div>
    )
}