var k

function setup (){
  createCanvas (windowWidth, windowHeight);  
  background(random(0,255), random(0,255),random(0,255))
  k=createButton('download');
  k.position (0,0);
  k.mousePressed(impresora)
  }

function draw(){
fill(random(0,255),random (0,255),random (0,255));
triangle (mouseX, mouseY, mouseX+20, mouseY+20,mouseX-20, mouseY+20);
/*
Todo esto lo saco de
https://p5js.org/es/reference/
*/
 }    

function impresora (){
saveCanvas("imagen","jpg");
}
