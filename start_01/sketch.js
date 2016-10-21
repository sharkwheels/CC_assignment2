/****************
Creation Computation: Multiscreen
Use 20 device screens. Meant for usage on phones.

Basics:
	// setup
	1.a preload a bunch of map pieces (maybe gifs, maybe images, maybe drawings)
	1.b choose one piece at random.
	1.c place on screen
*************/

/// Make an array of images ////////
var imageArray = [];
var randImg;

// Timer Junk //////////////////
var interval = 100; // ms
var previousMillis = 0;

function preload(){
  // populate array from directory of images.
  for (var i = 0; i < 12; i++){
    imageArray[i] = loadImage('images/Middle-earth_' + i + '.jpg');
  }
}

function setup() {
  createCanvas(1000,1000);
  console.log(imageArray);
  randImg = imageArray[Math.floor(Math.random() * imageArray.length)];
  console.log(randImg);
}

function draw(){
  background(0);
  image(randImg,0,0);
  
  // after X MS get a new image
  if(millis() - previousMillis > interval){
    randImg = imageArray[Math.floor(Math.random() * imageArray.length)];
    previousMillis = millis();
  }
}
