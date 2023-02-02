import React from "react"
import Info from "./Components/Info"
import About from "./Components/About"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"

export default function App() {
    return (
        <main className="main-component">
            <Info />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}