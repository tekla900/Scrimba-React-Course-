import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
  }
  

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme(prevMeme => ({ ...prevMeme, [name]: value }));
  }

  return (
    <main>
      <form className="form--section">
        <div className="form--inputs">
          <input
            type="text"
            id="top-text"
            className="form--input"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />

          <input
            type="text"
            id="bottom-text"
            className="form--input"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button
          className="form--button"
          onClick={getMemeImage}
          type="button"
        >
          Get a new meme image &#128444;
        </button>
      </form>

      <section className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
