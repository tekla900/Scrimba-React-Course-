import React, {useState} from "react"
import memesData from "../memesData"

export default function Form() {
    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        setMemeImage(memesArray[randomNumber]['url'])
    }

    return (
        <main>
            <form className="form--section">
                <div className="form--inputs">
                    <input type="text" id="top-text" className="form--input" />
                    <input type="text" id="bottom-text" className="form--input" />
                </div>
                <button className="form--button" onClick={getMemeImage} type="button"> Get a new meme image &#128444;</button>
            </form>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}