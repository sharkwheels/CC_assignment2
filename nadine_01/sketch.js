/*******************
October 2016
Creation Computation: Multiscreen
Title: Dictator Bowling
People: Nadine Lessio & Mudit Gaudy
************************/

// notes:

////https://forum.processing.org/two/discussion/13494/what-s-the-best-way-of-telling-when-a-sound-file-has-finished-playing

var imageArray = [];
var pointsArray = [];

var currentdict;
var randImg;

var x;
var scaleval;


var gameStart;
var gameEnded;
var startImage;

var crashPlayed;

function preload(){

  //loading soundfiles, sound_1 is the arcade sound, sound_2 is the bowling pin sound
  casinoSound = loadSound('sound/sound_1.mp3'); // won't autoplay because iOS
  crashSound = loadSound('sound/sound_2.mp3');

  //loading state1 images in the array
  for (var i = 0; i < 10; i++){
    imageArray[i] = loadImage('images/dictator_' + i + '.jpg');
    pointsArray[i] = loadImage('images/state2_' + i + '.jpg');
  }

  startImage = loadImage('images/startImage.jpg');
}


function setup() {
  // create canvas and give the background a color
  createCanvas(windowWidth, windowHeight);
  background(255);

  //scale
  scaleval = (windowWidth/1242);

  //set sound voume
  casinoSound.setVolume(0.1);
  crashSound.setVolume(0.5);

  casinoSound.loop();
  casinoSound.stop();
  crashPlayed = false;


  //default values of x and y
  xpos = 200;
  ypos = 200;
  x = 0;
  y = 0;


  //assign randImg to display image from the array
  console.log("setup: ",imageArray);
  currentdict = Math.floor(Math.random() * imageArray.length);
  randImg = imageArray[currentdict];
  console.log(randImg,currentdict);

  gameStart = false;

}

function draw() {
  
  scale(scaleval,scaleval);

  if(gameStart){
    // if the game has started
    image(randImg,0,0);
    // JS canvas thing that mudit did. 
    if(rotationX < 5){
      console.log("this was knocked down");
      gameEnded = true;
    }
  } else {
    image(startImage,0,0);
  }
    
  // keeps the points image in tact so you can add up points.
  if(gameEnded){
    image(pointsArray[currentdict],0,0);
    // play a sound clip
    soundControl(2);
    playSounds(crashSound);
    
    
  }
  //console.log("gameEnded: ",gameEnded);
  //console.log("gameStart: ", gameStart);
  
}

function mouseReleased(){

  // this isn't quite right. But frankly I'm out of spoons. 

  if(gameEnded) {
    gameEnded = false;
    gameStart = false;
    
  }

  if(!gameStart){
    gameStart = true;
    crashPlayed = false;
    getDictator();
    soundControl(1);
    
  }
}

function getDictator(){
  // it would be good if this didn't load the same random in a row. 
  
    currentdict = Math.floor(Math.random() * imageArray.length);
    randImg = imageArray[currentdict];
    console.log(randImg);
  
}

function playSounds(song){
  console.log(song);
}

function soundControl(track){
  if(track == 1){

    playCasinoSound();
    stopCrashSound();
    //crashPlayed = true;
  } else {
    playSounds(casinoSound);
    stopCasinoSound();
    playCrashSound();
  }
}

// ok this could be waaaaaay more compact...but hey, spoons. 

/// Casino Sound ///////////////////////////////////////////////////////////

function playCasinoSound(){
  if(casinoSound.isPlaying() == false){
    casinoSound.play();
  }
}

function stopCasinoSound(){
  if(casinoSound.isPlaying() == true){
    casinoSound.pause();
  }
}

// Crash Sound ///////////////////////////////////////////

function playCrashSound(){
  
    if(!crashPlayed){
      if(crashSound.isPlaying() == false){
        crashSound.play();
        crashPlayed = true;
      }
      
      
    }
}

function stopCrashSound(){
  if(crashSound.isPlaying() == true){
    crashSound.stop();
  }
}
