import React from "react";
import Header from "./components/Header.js"
import Meme from "./components/Meme.js"
import MemeList from "./components/MemeList.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <MemeList />
    </div>
  );
}

export default App;
