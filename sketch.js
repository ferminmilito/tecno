const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let amortiguacion = 0.9;
// MICROFONO
let mic;

// CONFIGURACION AMPLITUD
let AMP_MIN = 0.02; // mínimo sonido que supera al del fondo
let AMP_MAX = 0.56; // máximo sonido que supera al del fondo

let FREC_MIN =0;
let FREC_MAX =600;

// AMPLITUD
let amp;
let haySonido = false;
let antesHabiaSonido = false;

// PITCH
let pitch;
let audioContext;

// OBRA
let o;

// GESTOR
let gestorAmp;
let gestorPitch;

// IMPRIMIR
let IMPRIMIR = false;

// SETUP
function setup() {
  createCanvas(400, 600);
  // DIBUJA LA OBRA
  o = new Obra();

  colorMode(RGB);
  // background(155);
  // MICROFONO
  audioContext = getAudioContext(); 
  mic = new p5.AudioIn(); 
  mic.start(startPitch);
  // GESTOR
  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorPitch = new GestorSenial(FREC_MIN, FREC_MAX);
  gestorAmp.f = amortiguacion;

  userStartAudio();
}

// DRAW
function draw() {
  let vol= mic.getLevel()
  gestorAmp.actualizar(vol);
  amp = gestorAmp.filtrada;
  frec=gestorPitch.filtrada;

  haySonido = amp > AMP_MIN;

  let empezoElSonido = haySonido && !antesHabiaSonido;

  if (haySonido) {
    o.dibujar(amp);
    o.actualizar(frec);
    
  }

  if (empezoElSonido) {
    o.dibujar();
  }

  if (IMPRIMIR) {
    printData();
  }

  antesHabiaSonido = haySonido;
}

// PRINT DATA
function printData() {
  push();
  textSize(20);
  fill(200);
  let texto;

  texto = 'amplitud: ' + amp;
  text(texto, 20, 20);

  pop();

  gestorAmp.dibujar(0, 100);
  gestorPitch.dibujar(0, 200);
}

// ---- Pitch detection ---
function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {

      gestorPitch.actualizar(frequency);    
      //console.log(frequency);
    } 
    getPitch();
  })
}