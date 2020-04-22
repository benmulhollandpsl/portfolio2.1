

      function myPhone() {
      alert("Please send me an email to request phone number");
};

     
// songs that will play in an array
var songs = [
    "quaranrelax.mp3","spiral shell.mp3"

];

//array of posters

var posters = [
    "quaranrelaxcover.jpg", "spiralshellcover.jpg"
];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

// object of audio class
var song = new Audio();
var currentSong = 0;  // starts on current song

window.onload = playSong;   // calls function playSong when window loads

function playSong(){
    song.src = songs[currentSong];  //sets the source of the 0th song
    songTitle.textContent = songs[currentSong]; //set the title of song

}