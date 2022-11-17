import "./css/Playlists.css";
import SongItem from "./SongItem";

const Playlists = ({ songs = [] }) => {
    const songTags = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index} />;
    });
    return <div id="song-list">{songTags}</div>;
};

export default Playlists;
