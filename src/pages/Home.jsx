import React from "react"
import '../styles/home.css'

export default function Home(){
    document.getElementById("title").innerHTML = "Home"

    let i = 0;
    const txtFirst = "Hi, I'm";
    const txtSecond = "          Mohammad Hosein Zamani"
    const speed = 200;

    // document.getElementsByClassName("homeContainer")[0].addEventListener("load", typeWriter)
    React.useEffect(()=>{
        window.onload = typeWriter()
    }, [])

    function typeWriter() {
        if (i < txtFirst.length) {
            document.getElementById("homeFirstText").innerHTML += txtFirst.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else if (i < txtFirst.length + txtSecond.length){
            document.getElementById("homeSecondText").innerHTML += txtSecond.charAt(i);
            i++;
            setTimeout(typeWriter, speed*1.5);
        }
    }

    return (
        <div className="homeContainer">
            <h2 id="homeFirstText"></h2>
            <h1 id="homeSecondText"></h1>
        </div>
    )
}