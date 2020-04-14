function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  /*button = createButton('submit');
  button.position(100, windowHeight/2);
  

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

//let button;
let startPressed=false;
let timer1=30;
let timer2;

function easyMode(){
  //use an array
  let radius=random(20,100);
  
  for(let i=0; i<3; i++){
    fill(random(255), random(255), random(255));
    ellipse(random(windowWidth/6),((windowWidth/6)+400+radius), random((windowHeight/8), ((windowHeight/8)+400)+radius), radius);
  }

  for(let i=0; i<2; i++){
    fill(random(255), random(255), random(255));
    rect(random(windowWidth/6,(windowWidth/6)+400),random((windowHeight/8), windowHeight/8+400),random(10,100),random(10,100));
  }

}
function draw(){
  if(startPressed==false){
    startB = createButton('Play!');
    startB.position(200, windowHeight/2);
    startB.size(200,100);
    startB.style("font-family", "Bodoni");
    startB.style("font-size", "48px");
    startB.mousePressed(gamePage);
  }

  else{
    makeGenerator();
    if(mouseX>windowWidth/2 && mouseX< (windowWidth/2)+500 && mouseY>windowHeight/8 && mouseY<(windowHeight/8)+500){
      if(timer2>0 && mouseIsPressed == true){
        stroke(10);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

  }
 
}

function gamePage(){
  startPressed=true;
  redraw();
}

function makeGenerator(){
  //generator rectangle
  fill('white');
  rect(windowWidth/6,windowHeight/8,500,500);

  //canvas rectangle
    fill('green');
    rect(windowWidth/2,windowHeight/8,500,500);
  
    fill('white');
    textSize(50);
    text('Memorize it!', windowWidth/2+125 , height * 0.667);
    
    timePassed();
    
    
  
}
  

function timePassed(){
  print(timer2)

  fill('white');
  rect(50,70,100,50);
  
  textAlign(CENTER,CENTER);
  textSize(50);
  fill('blue');
  text(timer1, 100, 100);

  if (frameCount % 60 == 0 && timer1 > 0){
    fill('white');
    rect(50,70,100,50);
    timer1--;
  }

  else if (timer1 == 0){
    
    fill('green');
    rect(windowWidth/6,windowHeight/8,500,500);

    textSize(50);
    text('Now Draw it!', windowWidth/6+250 , height * 0.667);
    
    fill('white')
    rect(windowWidth/2,windowHeight/8,500,500);
    
    timer2=60;

    rect(50,70,100,50);
    timer1= -1;
    
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
    
  }
}
}
