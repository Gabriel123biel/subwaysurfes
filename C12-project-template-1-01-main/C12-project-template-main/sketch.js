var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;
var ground, invisibleGround, groundImage;

function preload() {
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
}

function setup() {

  createCanvas(400, 400);
  //crie um sprite para a pista

  var path = createSprite(30, 200, 50, 70);

  var ground = createSprite(30, 200, 50, 70);
  //adicione uma imagem para a pista
  path.addImage("path", pathImg);

  ground.addImage("ground", groundImage);
  //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.scale = 1.5;
  path.velocityY = -6;
  //crie um sprite de menino
  boy = createSprite(80, 30, 15, 15);
  //adicione uma animação de corrida para ele
  boy.scale = 0.08;

  boy = addAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  //crie um limite à esquerda
  leftBoundary = createSprite(200, 40, 100, 800);
  //defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false
  //crie um limite à direita
  rightBoundary = createSprite(200, 80, 100, 800);
  //defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;

  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(edges);
  //código para redefinir o fundo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
