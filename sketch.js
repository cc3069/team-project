let startPressed=false;
let timer1=30;
let timer2;
let shapes = [];
let rectArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  makeEllipse();
  makeRectangles();

  /*button = createButton('submit');
  button.position(100, windowHeight/2);
  
//button = createButton('submit');
  //button.position(100, windowHeight/2);

  /* Difficulty level buttons
  
  button = createButton('Easy');
  button.position(200, windowHeight/2);
  button.size(200,100);
  button.style("font-family", "Bodoni");
  button.style("font-size", "48px");
  button.mouseOver(changeCursor);
  button.mousePressed(changeBG);
    

  button2 = createButton('Medium');
  button2.position(500, windowHeight/2);
  button2.size(200,100);
  button2.style("font-family", "Bodoni");
  button2.style("font-size", "48px");

  button3 = createButton('Hard');
  button3.position(800, windowHeight/2);
  button3.size(200,100);
  button3.style("font-family", "Bodoni");
  button3.style("font-size", "48px");

  button4 = createButton('Xtreme');
  button4.position(1100, windowHeight/2);
  button4.size(200,100);
  button4.style("font-family", "Bodoni");
  button4.style("font-size", "48px");
  */

}
//function easyMode(){}

function makeEllipse() {
  //rect(windowWidth/6,windowHeight/8,500,500);
  
  let radius=random(100,200); 
    for (let i = 0; i < 3; i++) {
        let shape = {
            x: random((windowWidth/6)+radius,((windowWidth/6)+500-radius)),
            y: random(((windowHeight/8)+radius, ((windowHeight/8)+500-radius))),
            w:random(radius),
            h:random(radius),
        }
        fill(random(255), random(255), random(255));
        append(shapes, shape);
    }
  
}

function drawEllipse() {
    for (let i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        ellipse(shape.x, shape.y, shape.w, shape.h);
    }
}
function makeRectangles(){
    for (let i = 0; i < 2; i++){
        let rectArrays={
            x: random(windowWidth/6,(windowWidth/6)+400),
            y: random((windowHeight/8), windowHeight/8+400),
            w: random(50,100),
            h: random(50,100),
        }
        fill(random(255), random(255), random(255));
        append(rectArray, rectArrays);
    }   
}  

function drawRectangles() {
    for (let i = 0; i < rectArray.length; i++) {
        let rectArrays = rectArray[i];
        rect(rectArrays.x, rectArrays.y, rectArrays.w, rectArrays.h);
    }
}

function draw(){
  if(startPressed==false) {
    startB = createButton('Play!');
    startB.position(20, windowHeight/5);
    startB.size(200,100);
    startB.style("font-family", "Bodoni");
    startB.style("font-size", "48px");
    startB.mousePressed(gamePage);
  }

  else{

      if(timer1>0){
        //generator rectangle
        noStroke();
        fill('white');
        rect(windowWidth/6,windowHeight/8,500,500);

        fill('white');
        rect(50,70,100,50);
        print(timer2);

        //canvas rectangle
        fill('green');
        rect(windowWidth/2,windowHeight/8,500,500);

        fill('white');
        textSize(50);
        text('Memorize it!', windowWidth/2+150 , height * 0.667);

        textAlign(CENTER,CENTER);
        textSize(50);
        fill('blue');
        text(timer1, 100, 100);
      
        fill('red');
        drawEllipse();
        drawRectangles();
      }

      else if(timer1<=0){
        fill('green');
        rect(windowWidth/6,windowHeight/8,500,500);
    
        textSize(50);
        fill('white')
        text('Now Draw it!', windowWidth/6+250 , height * 0.667);

        rect(50,70,100,50);
      }

      timePassed();
    
      if(mouseX>windowWidth/2 && mouseX< (windowWidth/2)+500 && mouseY>windowHeight/8 && mouseY<(windowHeight/8)+500){
        if(timer2>0 && mouseIsPressed == true){
            stroke('red');
            strokeWeight(4);
            line(mouseX, mouseY, pmouseX, pmouseY);
          }
      }
    }
  }
 

function gamePage(){
  startPressed=true;
  //startB.hide();
}
  

function timePassed(){

  if (frameCount % 60 == 0 && timer1 > 0){
    
    
    fill('white');
    rect(50,70,100,50);
    timer1--;
  }

  else if (timer1 == 0){
    timer2=60;
    timer1= -1;
    fill('white');
    rect(windowWidth/2,windowHeight/8,500,500);
  }
  
  else{
    if(frameCount % 60 == 0 && timer2 > 0){
      fill('white');
      rect(50,70,100,50);
      timer2--;
    }

    textAlign(CENTER,CENTER);
    fill('orange');
    textSize(50);
    text(timer2, 100, 100);

    if(timer2==0){
      noStroke();
      fill('white');
      rect(windowWidth/6,windowHeight/8,500,500);

      fill('red');
      drawEllipse();
      drawRectangles();
    }
  }
}

/*
function getPercent(){
  let d = pixelDensity(2);
  get(windowWidth/2,windowHeight/8,500,500);

  for (let i = 0; i < d; i++) {
    for (let j = 0; j < d; j++) {
      // loop over
      index = 4 * ((y * d + j) * width * d + (x * d + i));
      pixels[index] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = a;
    }
for (let i = 0; i < d; i++) {
  for (let j = 0; j < d; j++) {
    // loop over
    index = 4 * ((y * d + j) * width * d + (x * d + i));
    pixels[index] = r;
    pixels[index+1] = g;
    pixels[index+2] = b;
    pixels[index+3] = a;
  }
}
*/


