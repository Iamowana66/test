let img; 



function preload() {
  img = loadImage('IMG_5336.jpg')
  
  
  
}

function setup() {
    createCanvas(windowWidth, windowHeight/2);
  
  }


  
  function draw() {
    noStroke();
    background(230,30,80);
    
    
    
    fill(200)
    circle(0,windowHeight/2,300)
    
    fill(100,20,50)
    rect(30, 20, 300, 300)
    fill(200,20,150)
    rect(20,10,280,280)
    
    fill(250,200,20)
    circle(windowWidth-100,windowHeight/2-100,300)
    
    fill(255,100,20)
    circle(windowWidth,windowHeight/2-200,300)
    
    fill(255)
    circle(windowWidth,windowHeight/2,300)
    
    image(img,80,50,200,290)
    
    textStyle(ITALIC)
    textFont('Comic Sans MS')
    textSize(50)
    text('Wanassakorn',windowWidth/2,80)
    text('Khumwonggrod',windowWidth/2-80,150)
    
    textSize(100)
    textFont('Impact')
    text('Mo',windowWidth/2-50,300)
    
    
   
  }