let startPressed=false;
let timer1=30;
let timer2;
let shapes = [];
let rectArray = [];



function setup() {
  loadPixels();
  createCanvas(windowWidth, windowHeight);
  background('#F7A556');

  makeEllipse();
  makeRectangles();
}

function makeEllipse() {
  
    for (let i = 0; i < 3; i++) {
        let ellipses = {
            x: random((windowWidth/6)+100,((windowWidth/6)+250)-100),
            y: random((windowHeight/8)+100, ((windowHeight/8)+500)-100),
            w:random(10,100),
            h:random(10,100),
        }
        append(shapes, ellipses);
    }
  
}

function drawEllipse() {
    for (let i = 0; i < shapes.length; i++) {
        let ellipses = shapes[i];
        ellipse(ellipses.x, ellipses.y, ellipses.w, ellipses.h);
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
    fill(random(255),random(255),random(255));
    textAlign(CENTER,CENTER);
        textSize(50);
        text('Welcome To Art Memory Game!', 800, 100);
        fill('#42518C')
        textSize(35);
        text('Instructions:', 280, 200);
        text('Can you memorize the art in 30 seconds', 500, 300);
        text('and Draw it in 60 seconds?', 1000, 400);
        textSize(50);
        text('Ready?', 500, 600);

    startB = createButton('Play!');
    startB.position(800, windowHeight/1.25);
    startB.size(200,100);
    startB.style("font-family", "Bodoni");
    startB.style("font-size", "48px");
    startB.style("color","#fff");
    startB.style("background-color","#a04888");
    startB.mousePressed(gamePage);
  }

  else{

      if(timer1>0){
        //cover-up rectangle
        noStroke();
        fill('#F7A556')
        rect(100,50,1200,800)
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
        text('Memorize it!', windowWidth/2+250 , height * 0.45);

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

        if(mouseX>windowWidth/2 && mouseX< (windowWidth/2)+500 && mouseY>windowHeight/8 && mouseY<(windowHeight/8)+500){
          if(timer2>0 && mouseIsPressed == true){
              stroke('red');
              strokeWeight(4);
              line(mouseX, mouseY, pmouseX, pmouseY);
            }
        }
      }

      timePassed();
    }
  }
 

function gamePage(){
  if(startPressed=true){;
  playA = createButton('Play Again!');
  playA.position(800, windowHeight/1.25);
  playA.size(200,100);
  playA.style("font-family", "Bodoni");
  playA.style("font-size", "40px");
  playA.style("color","#fff");
  playA.style("background-color","#a04888"); 
  }
}


function playAgain(){
    timer1=30
    redraw();
    fill('white');
    rect(windowWidth/6,windowHeight/8,500,500);
    makeEllipse();
    makeRectangles();
    
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
      textSize(25)
      text('Do you think your drawing resembles it? Great Job! Going to Try Again? Have Fun!', 500, 25);
      playA.mousePressed(playAgain);
      fill('red');
      drawEllipse();
      drawRectangles();
      timer2==-1;
    }
    
      
  
      
  }
}


//in Progress
/*function getPercent(){
  let genPixels=[];
  let canvasPixels=[];
  let match=0;
  let percent;

  for (let y = windowHeight/8; y < (windowWidth/8)+500; y++) {
    for (let x = windowWidth/6; x < (windowHeight/6)+500; x++) {
      let index = (x + y * width)*4;
      let components1=[
        pixels[index+0],
        pixels[index+1],
        pixels[index+2],
        pixels[index+3],
      ]
      append(genPixels, components1);
      //genPixels.push(components1);
    }   
    }
  
    for (let k = windowWidth/8; k < (windowWidth/8)+500; k++) {
      for (let h = windowHeight/2; h < (windowHeight/2)+500; h++) {
        let index2 = (h + k * width)*4;
        let components2=[
          pixels[index2+0],
          pixels[index2+1],
          pixels[index2+2],
          pixels[index2+3]
        ]
        //canvasPixels.push(components2);
        append(genPixels, components2);    
      }

      for (let g=0; g< genPixels.length; g++) {
        if(genPixels[g] == canvasPixels[g]) {
          match++;
        }

      percent= (match/genPixels.length)*100;
      print(percent+"%");
  }
}
}
*/
  


  

