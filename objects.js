var playlist = {"Slowdive": "Alison", "My Bloody Valentine": "Sometimes"};

var updatePlaylist = (playlist, artistName, songTitle) => {
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
