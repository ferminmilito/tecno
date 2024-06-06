let o;

function preload() {
  img1 = loadImage('data/rect1.png')
  img2 = loadImage('data/rect2.png')
  img3 = loadImage('data/rect3.png')
  img4 = loadImage('data/rect4.png')
}


function setup() {
  createCanvas(400, 600);
  o = new Obra(); // Se intenta crear una instancia de Obra aquí
  colorMode(HSB);
  background(0)
  fill(0);
}

function draw() {
  o.dibujar();
}

function mousePressed() {
  o.cambiocolor();
  loop();
}

