// Meme component handles the logic for genenrating memes using Axios and displaying 
// them in the user interface. 
import React from "react";
import axios from "axios";
import MemeList from "./MemeList.js"
import { v4 as uuidv4 } from 'uuid';

function Meme(){
    //creating state to render top and bottom text along with images
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    //check for object submited

    // created state for memes array from given API "https://api.imgflip.com/get_memes"
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
       axios.get("https://api.imgflip.com/get_memes")
       .then(res => setAllMemes(res.data.data.memes))
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

    //as input values change meme state updates
    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    //state that stores created memes on submit btn
    const [createMeme, setCreateMeme] = React.useState([])
    
    //adds meme to user meme list, generating a key id to new meme object with uuidv
    function createNewMeme(){
        const userList = meme
        userList.id = uuidv4()
        setCreateMeme(prevState => ([
            ...prevState,
            userList
        ]))
    }

    //mapping and rendering each creted meme in child component 
    const listOfMemes = createMeme.map((newMeme, index) => {
        return(
            <MemeList 
                key={index}
                newMeme={newMeme}
                saveMeme={saveMeme}
                deleteMeme={deleteMeme}
            />
        )
    })
    console.log(listOfMemes)

//save created meme 
function saveMeme(m){
    setCreateMeme(prevState => prevState.map(item => {
        if(item.id === meme.id){
            return meme
        }else{
            return item
        }
    }))
}

//delete saved meme from the list 
function deleteMeme(e){
    //saving meme id inot a variable, Number constructor is called to convert primative numbers
    const newId = Number(e.target.id)
    setCreateMeme(prevState => prevState.filter((_,index) => index !== newId))
}

    return(
        <main>
            <div className="form">
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
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            <div className="meme-save">
                <button onClick={createNewMeme} className="save-btn">Add Meme to List</button>
            </div>
            {listOfMemes}
        </main>
    )
}

export default Meme;


// API to get list of memes:
// "https://api.imgflip.com/get_memes" 