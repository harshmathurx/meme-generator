import React, { useEffect, useState } from 'react'
import axios from 'axios';
const MemeGenerator = () => {

    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");

    const [topText, setTopText] = useState("");

    const [bottomText, setBottomText] = useState("");

    const [allMemeImgs, setAllMemeImgs] = useState([]);

    useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(function (res) {
                const memes = res.data.memes;
                setAllMemeImgs(memes)
            })
            .catch(function (error) {
                console.log(error);
            });

}, [])

const generateRandomMeme = (e) => {
    e.preventDefault()
    let index = Math.floor(Math.random() * 100);
    console.log(allMemeImgs);
    setRandomImg(allMemeImgs[index].url)
}

return (
    <div>
        <form action="" className="meme-form" onSubmit={generateRandomMeme}>
            <input type="text" name="topText" placeholder="Top Text" value={topText} onChange={(e) => setTopText(e.target.value)} />

            <input type="text" name="bottomText" placeholder="Bottom  Text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} />

            <button >Generate</button>
        </form>

        <div className="meme">
            <img src={randomImg} alt="" />
            <h2 className="top">{topText}</h2>
            <h2 className="bottom">{bottomText}</h2>
        </div>
    </div>
)
}

export default MemeGenerator
