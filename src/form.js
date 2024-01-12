import React, { useEffect, useState } from "react";

export default function Form() {
  const [allMemes, setAllMemes] = useState({});
  const [meme, setMeme] = useState({
    img: "",
    name: "Click above",
    txt1: "start writing",
    txt2: "start writing",
  })

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => {
        setAllMemes(data);
        const randomIndex = Math.floor(Math.random() * data.data.memes.length);
        setMeme({
          ...meme,
          img: data.data.memes[randomIndex].url,
          name: data.data.memes[randomIndex].name,
        });
      })
      .catch(error => console.error(error));
  }, []); // Empty dependency array to execute once on component mount

  function changeRandom() {
    const randomIndex = Math.floor(Math.random() * allMemes.data.memes.length);
    setMeme({
      ...meme,
      img: allMemes.data.memes[randomIndex].url,
      name: allMemes.data.memes[randomIndex].name,
    });
  }

  return (
    <section>
      <div className="inputs--cont">
        <input
          type="text"
          className="form--input"
          placeholder="top text"
          onChange={(e) => setMeme({ ...meme, txt1: e.target.value })}
        />
        <input
          type="text"
          className="form--input"
          placeholder="bottom text"
          onChange={(e) => setMeme({ ...meme, txt2: e.target.value })}
        />
      </div>
      <div className="button--cont">
        <button className="form--button" onClick={changeRandom}>
          Get a new meme image 📸
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>{meme.name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <p id="form--txt1">{meme.txt1.toUpperCase()}</p>
        <p id="form--txt2">{meme.txt2.toUpperCase()}</p>
        <img className="form--img" alt="Oops!" src={meme.img} />
      </div>
    </section>
  );
}
