var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  path = loadAnimation("path.png");
  //loadAnimation de boy (niño)
  boy = loadAnimation("Jake1.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path=createSprite(190,362,50,50);
//agregar imagen de path
path.addAnimation("path");
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY=-4.0;
path.scale=1.2;

//crear sprite de boy (niño)
boy=createSprite(176,352,50,50);
//agregar animación para boy
boy.addAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
boy.scale=0.8000;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = true;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = true;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
    boy.x=World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  if(boy.isTouching(leftBoundary) || boy.isTouching(rightBoundary)){
    boy.velocityY=0;
    path.velocityY=0;
  }
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
