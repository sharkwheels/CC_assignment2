/****************
Creation Computation: Multiscreen
People: Nadine & Mudit 
Use 20 device screens. Meant for usage on phones.

Testing some ACCEL data, the background will change its RGB values based on XYZ values.
*****************/

/// positioning ////////////
var x;
var y;
var z;

// colour values ////////////
var r;
var g;
var b;

function setup(){
  // set canvas size
  createCanvas(displayWidth, displayHeight);
  r = random(50, 255);
  g = random(0, 200);
  b = random(50, 255);
}

function draw(){
  // set background color to respond to accel data.
  background(r,g,b);

  // display accel values on screen for mapping / debugging
  fill(0);
  noStroke();
  text("x: " + x, 25, 25);
  text("y: " + y, 25, 50);
  text("z: " + z, 25, 75);

}

/// Accelerometer Data /////////
// This isn't using P5js, but a web/mobile JS API. Will read up more.

// https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity
// http://coursescript.com/notes/interactivecomputing/mobile/accelerometer/

window.addEventListener('devicemotion', function(e){
  // get accelerometer values
  x = parseInt(e.accelerationIncludingGravity.x);
  y = parseInt(e.accelerationIncludingGravity.y);
  z = parseInt(e.accelerationIncludingGravity.z);
});

function deviceMoved(){
  // figure out a device threshold. So that it will only change if forcefully moved, not brushed.
  r = map(x, -9, 9, 100, 255);
  g = map(y, -9, 9, 100, 255);
  b = map(z, -9, 9, 100, 255);
}
