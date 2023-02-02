import React from "react"

export default function Info() {
    return (
        <header className="info-section">
            <img className ="info-image" src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="picture of someone" />
            <h1 className="user-name">Tekla Inashvili</h1>
            <h3 className="user-occupation">Frontend Developer</h3>
            <div className="button-container">
                <a href="mailto: tekla.inashvili.1@btu.edu.ge" className="white-button button"><img src="./src/images/email.png" alt="email icon" className="info-icons"/>Email</a>
                <a href="https://www.linkedin.com/in/tekla-inashvili-b95594232/" className="blue-button button"><img src="./src/images/LinkdIn.png" alt="linkedin icon" className="info-icons"/>LinkedIn</a>
            </div>
        </header>
    )
}