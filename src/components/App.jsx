import React from "react";
import "./css/App.css";
import Navbar from "./Navbar";
import Player from "./Player";
import Playlists from "./Playlists";
import songs from "../data/songs.json";
// import SongDetail from "./SongDetail";
import Body from "./Body";

for(let index = 0; index < songs.length; index++){
    const song = songs[index];
    song.id = index; 
}

const App = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Body />
            {/* <SongDetail /> */}
            <Playlists songs={songs} />
            <Player />
            <a href="#focused" id="focus-link" hidden>
                Go to playing element
            </a>
        </React.Fragment>
    );
};

export default App;