const playlist = [
    { song: "Blinding Lights", singer: "The Weeknd", duration: 3.20 },
    { song: "Shape of You", singer: "Ed Sheeran", duration: 4.24 },
    { song: "Someone Like You", singer: "Adele", duration: 4.45 },
    { song: "Bad Guy", singer: "Billie Eilish", duration: 3.14 },
  ];
  
  const addSong = (song) => {
    if (song.song && song.singer && song.duration) {
      playlist.push(song);
      return "Song added successfully!";
    } else {
      return "Invalid format";
    }
  };
  
  addSong({ song: "Rolling in the Deep", singer: "Adele", duration: 3.48 });
  addSong({ song: "Despacito", singer: "Luis Fonsi ft. Daddy Yankee", duration: 4.42 });
  addSong({ song: "Bohemian Rhapsody", singer: "Queen", duration: 5.55 });
  
  console.log("Playlist after adding songs:", playlist);
  
  const removeSong = (songName) => {
    const index = playlist.findIndex(song => song.song === songName);
    if (index !== -1) {
      const removed = playlist.splice(index, 1);
      return `"${removed[0].song}" removed successfully.`;
    } else {
      return `"${songName}" not found in playlist.`;
    }
  };
  
  console.log(removeSong("Blinding Lights"));
  
  const totalDuration = () => {
    const duration = playlist.reduce((sum, song) => sum + song.duration, 0);
    return duration.toFixed(2);
  };
  
  console.log("Total Duration:", totalDuration());
  
  const listAllSongs = () => {
    playlist.forEach(song => console.log(song));
  };
  
  const handleOverflow = () => {
    while (playlist.length > 5) {
      const removedSongName = playlist[0].song;
      removeSong(removedSongName);
      console.log(`"${removedSongName}" removed from playlist`);
    }
  };
  
  handleOverflow();
  listAllSongs();
  