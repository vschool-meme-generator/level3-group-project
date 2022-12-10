import React from "react";

function Header(){
    return(
        <header className="header">
            <img src="./images/trollFace.png" className="troll-face" alt="troll-face"/>
            <h2 className="header--title">Meme Generator</h2>
            
            {/* <h4 className="header--by">By: Dasha and Karyna</h4> */}
        </header>
    )
}

export default Header;