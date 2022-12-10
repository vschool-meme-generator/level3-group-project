import React from "react";

function Meme(){
    //creating state to render top and bottom text along with images
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevState => ({
            ...prevState,
            randomImg: url
        }))
    }

    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form-container">
                <input 
                type="text"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                className="form--btn"
                onClick={getMemeImage}
                > Get Meme Image 🖼</button>

            </div>
            <div className="meme-container">
                <img src = {meme.randomImg} className="meme-img" alt="meme"/>
                <h2 className="meme-top">{meme.topText}</h2>
                <h2 className="meme-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;


// API to get list of memes:
// "https://api.imgflip.com/get_memes" 