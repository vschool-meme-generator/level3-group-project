//this component handles the logic for managing the list of memes, including the 
//ability to edit, delete, and add to the list.

import React from "react";

function MemeList(props){
    const newMeme = props.newMeme
    console.log(newMeme)
    //save state for user created memes
    const [newUserMeme, setNewUserMeme] = React.useState(newMeme)

    //update meme state as input values change for top and bottom texts
    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target;
        setNewUserMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    //state that displays edit option onClick
    const [display, setDisplay] = React.useState('none')

    function saveEdit(e){
        e.preventDefault()
        props.saveMeme(newUserMeme)
        setDisplay('none') 
    }

    function editMeme(){
        setDisplay(true)
    }

    return(
        <div className="memeList-container">
            <img className="saved-meme" 
            src={newMeme.randomImg} 
            alt="saved-meme"/>
            <h2 className="saved-top text">{newUserMeme.topText}</h2>
            <h2 className="saved-bottom text">{newUserMeme.bottomText}</h2>

            <div className="saved-meme-btns">
                <button onClick={editMeme} className="edit-btn">Edit Meme</button>
                <button onClick={props.deleteMeme} className="delete-btn">Delete Meme</button>
            </div>

            <form onSubmit={saveEdit} style = {{display: display}}>
                <input
                className="user-edits"
                name="topText"
                value={newUserMeme.topText}
                onChange={handleChange}
                />
                <input
                className="user-edits"
                name="bottomText"
                value={newUserMeme.bottomText}
                onChange={handleChange}
                />
                <button className="save-changes-btn">Save changes</button>
            </form>
        </div>
    )
}

export default MemeList;

