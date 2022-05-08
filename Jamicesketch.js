var diam1 = 0;
var diam2 = 0;
function setup() {
  // put setup code here
//defining the size of my canvas
createCanvas(500,500) ;
  
}


function draw() {
  // put drawing code here 
  //defining the color of the canvas 
  background("#003366");// blue canvas 
  fill("#00FF00");
  stroke("FFFF00");
  strokeWeight(3);
  ellipse(width/10, height/8, diam1,diam1);
  fill ("#FF0000"); //red circle in blue canvas
  ellipse(mouseX,mouseY,200,200);
  fill ("#84B1D0");// baby blue circle 
  stroke("FFFF00");// white boarder stroke 
  strokeWeight(3);
  ellipse(300,300,30,30);
  ellipse(290,250,30,30);
  ellipse(400, 400, diam2, diam2);
  rect(width/5,height/5, 150,150);
  rect(50,100,20,20)
  rect(100,50,20,20)
  fill("#CC9999");
  noStroke();
  ellipse(random(0,width),random(0,height), 10, 10);
  noStroke();
  fill("#CECECE");//grey text 
  textSize(12);
  textStyle(ITALIC);
  text("Random thoughts inside my brain when I try to do a million things at once.", 50,400);
}

function mousePressed(){
  //allow circles after mouse pressed to increase until reaches 60 in size 
  if (diam1 >=60){
    diam1=0;
  } else{diam1=diam1+6
  }
if (diam2 >=60){
  diam2=0
}
else {diam2=diam2+6}
}