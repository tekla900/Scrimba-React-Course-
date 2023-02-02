import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/tekla.inashvili.3/" target="_blank">
                <img 
                className="footer-icons"
                src="./src/images/Facebook Icon.png"
                alt="facebook icon" />
            </a>

            <a href="https://www.instagram.com/teklainashvili/" target="_blank">
                <img 
                className="footer-icons"
                src="./src/images/Instagram Icon.png"
                alt="instagram icon" />
            </a>
            
            <a href="https://github.com/tekla900" target="_blank">
                <img 
                className="footer-icons"
                src="./src/images/GitHub Icon.png"
                alt="github icon" />
            </a>
        </footer>
    )
}
