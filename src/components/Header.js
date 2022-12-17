//Header component displayed the navBar of the meme generator. 
import React from "react";

function Header(){
    return(
        <header className="header">
            <img src="https://pngimg.com/uploads/trollface/trollface_PNG9.png" className="troll-face-logo" alt="troll-face"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project Capstone - Level 3</h4>
            
            {/* <h4 className="header--by">By: Dasha G. and Karyna C.</h4> */}
         </header>
    )
}

export default Header;