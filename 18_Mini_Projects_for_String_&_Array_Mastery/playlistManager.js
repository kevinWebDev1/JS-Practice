let playlist = ['lovely','unholy','senorita','broken'];

const addSong = (song) => {
    playlist.push(song);
}

const removeSong = (song) => {
    const index = playlist.findIndex(s => s === song);
    const removedSong = playlist.splice(index,1);
    if(index !== -1) console.log("removedSong ::>", removedSong);
    else console.log(song," not found!");
    
}

const listSong = () => {
    playlist.forEach(song => console.log(song));
}

const searchSongs = (query) => {
    const song = playlist.find(song => song.toLowerCase().includes(query.toLowerCase()));
    if(song) console.log("Search result ::>", song);
    else console.log("No result matched with query ::>", query);
}

removeSong("lovely");
removeSong("broken");
removeSong("broken");
addSong("baby");
addSong("holy");
listSong();

searchSongs("oly");