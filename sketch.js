let o;


function setup() {
  createCanvas(400, 600);
  o = new Obra(); // Se intenta crear una instancia de Obra aquí
  colorMode(RGB);
  background(0)
}

function draw() {
  o.dibujar();
}

function mousePressed() {
  o.cambiocolor();

}

function keyPressed() {
  o.manejarTecla(keyCode);
}

