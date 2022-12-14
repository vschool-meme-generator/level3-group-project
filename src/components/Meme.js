// Meme component handles the logic for genenrating memes using Axios and displaying 
// them in the user interface. 
import React from "react";
import axios from "axios";
import MemeList from "./MemeList.js"

function Meme(){
    //creating state to render top and bottom text along with images
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    // created state for memes array from given API "https://api.imgflip.com/get_memes"
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
        .catch(err => console.log(err.data))
    }, [])

    //onClick the meme image will change
    function getMemeImage(){
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevState => ({
            ...prevState,
            randomImg: url
        }))
    }

    //as input values change meme state uodates
    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    //state that stores created memes on submit btn
    const [createdMeme, setCreatedMeme] = React.useState([])
    
    function createMeme(){
        
    }

    return(
        <main>
            <div className="form-container">
                <input 
                className="input"
                type="text"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                className="input"
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
            {/* <footer className="footer">Developed by: Dasha Gaytan and Karyna Chernyak 2022</footer> */}
        </main>
    )
}

export default Meme;


// API to get list of memes:
// "https://api.imgflip.com/get_memes" 