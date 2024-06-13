const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let amortiguacion = 0.9;
// MICROFONO
let mic;

// CONFIGURACION AMPLITUD
let AMP_MIN = 0.05; // mínimo sonido que supera al del fondo
let AMP_MAX = 0.56; // máximo sonido que supera al del fondo

let FREC_MIN =0;
let FREC_MAX = 1;

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
  o = new Obra(pitch);

  colorMode(RGB);
  background(155);
  // MICROFONO
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
  gestorAmp.actualizar(mic.getLevel());
  gestorPitch.actualizar(mic.getLevel());

  amp = gestorAmp.filtrada;
  pitch=gestorPitch.filtrada;
  haySonido = amp > AMP_MIN;

  let empezoElSonido = haySonido && !antesHabiaSonido;

  if (haySonido) {
    o.dibujar();
    o.actualizar(amp);
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

  gestorAmp.dibujar(100, 100);
  gestorPitch.dibujar(50, 200);
}

// PITCH DETECTION
function startPitch() {
  audioContext = getAudioContext();
  pitch = ml5.pitchDetection(model_url, audioContext, mic.stream, modelLoaded);
}

// MODEL LOADED
function modelLoaded() {
  console.log('Modelo cargado');
  getPitch();
}

// GET PITCH
function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (err) {
      console.error(err);
    }
    if (frequency) {
      console.log('Frecuencia: ', frequency); // Verifica que se obtienen frecuencias
      let midiNum = freqToMidi(frequency);
      gestorPitch.actualizar(midiNum);
    } else {
      console.log('No se detecta frecuencia');
    }
    getPitch();
  });
}
