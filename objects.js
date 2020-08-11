var playlist = {"Slowdive": "Alison", "My Bloody Valentine": "Sometimes"};

var updatePlaylist = (playlist, artistName, songTitle) => {
  return playlist[artistName] = songTitle
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
