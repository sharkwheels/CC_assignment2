/*******************
October 28 2016

Creation Computation: Multiscreen
Title: Fascist Falldown v1.0
People: Nadine & Mudit 

Fascist Falldown is a bowling game where mobile phones act as the pins. 

************************/

var button;
var imageArray = [];
var randImg;
var x;
var pointsArray = [];
var currentdict;
var scaleval;



function preload(){
  
  //loading soundfiles, sound_1 is the arcade sound, sound_2 is the bowling pin sound
  mySound = loadSound('sound/sound_1.mp3');
  mySound1 = loadSound('sound/sound_2.mp3');
  
  //loading state1 images in the array
  for (var i = 0; i < 10; i++){
    imageArray[i] = loadImage('images/dictator_' + i + '.jpg');
    pointsArray[i] = loadImage('images/state2_' + i + '.jpg');
 
  }
}


function setup() {
  // create canvas and give the background a color
  createCanvas(windowWidth, windowHeight);
  background(255);

  //scale 
  scaleval = (windowWidth/1242);
  
  //play sound
  mySound.setVolume(0.1);
  mySound.play();
  
  //default values of x and y
  xpos = 200;
  ypos = 200;
  x = 0;
  y = 0;
  
  //assign randImg to display image from the array
  console.log(imageArray);
  
  currentdict = Math.floor(Math.random() * imageArray.length);
  randImg = imageArray[currentdict];
  console.log(currentdict);
  
  
  //create and position button.
  button = createButton("Grab my Dictator");
  button.position(190, 660);
  button.mouseReleased(resetSketch);
  
 
}

  //reset the sketch so that a new dictator is displayed
  function resetSketch(){
  currentdict = Math.floor(Math.random() * imageArray.length);
  randImg = imageArray[currentdict];
  console.log(randImg);
  
}

function draw() {
  background(255);
  scale(scaleval,scaleval);
  image(randImg,0,0);
  
  
  //tracks the rotation of the phone
  if (rotationX < 5) {
    
      //loads the second state of images
      image(pointsArray[currentdict],0,0);
      
   
    } 
}






