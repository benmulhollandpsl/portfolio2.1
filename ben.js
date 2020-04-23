

      function myPhone() {
      alert("Please send me an email to request phone number");
};

  
// songs that will play in an array
var songs = [
    "quaranrelax.mp3","spiral shell.mp3"

];

//array of posters

var poster = [
    "quaranrelaxcover.jpg", "spiralshellcover.jpg"
];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

// object of audio class
var song = new Audio();
var currentSong = 0;  // starts on current song

window.onload = playSong;   
// calls function playSong when window loads 

function playSong(){
    song.src = songs[currentSong];  //sets the source of the 0th song
    songTitle.textContent = songs[currentSong]; //set the title of song

    song.play();// this is breaking cannot autoplay
}

function playOrPauseSong(){
    if(song.paused){
        song.play();
        $("#play img").attr("src","./assets/audio/pause.png")
    }
    else{
        song.pause();
        $("#play img").attr("src","./assets/audio/play.png")
        // check src

    }
}
song.addEventListener('timeupdate',function(){
    var position = song.currentTime / song.duration;

    fillBar.style.width = position * 100 + '%';
});

//next song button
function next(){
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    
    }
    playSong();
    $("#play img").attr("src","./assets/audio/pause.png");
    $("#imageAlbum img").attr("src",poster[currentSong]); //should change background poster
    $("#bg img").attr("src",poster[currentSong]);

}
//previous button
function prev(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    
    }
    playSong();
    $("#play img").attr("src","./assets/audio/pause.png");
    $("#imageAlbum img").attr("src",poster[currentSong]); 
    $("#bg img").attr("src",poster[currentSong]);

}

//calling next on button click 
//posters need to be set to each song