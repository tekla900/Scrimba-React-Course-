import React from "react"

export default function Header() {
    return (
        <header>
            <div className="header--div">
                <img src="./images/troll-face.png" className="header--image" />
                <h2 className="header--title">Meme Generator</h2>
            </div>
            <h3 className="header--title--secondary">React Course - Project 3</h3>
        </header>
    )
}