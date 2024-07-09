class fondo {
    constructor(c2, c3, c4) {
        this.canvasFondo = createGraphics(400, 600);
        this.color1 = c2;
        this.color2 = c3;
        this.color3 = c4;
        this.targetColor1 = c2;
        this.targetColor2 = c3;
        this.targetColor3 = c4;
        this.cuadradofondo = loadImage('data/cuadradofondo.png');
        this.cuadradofondo2 = loadImage('data/cuadradofondo2.png');
        this.anch1 = random(250, 275);
        this.alt1 = random(375, 440);
        this.anch2 = random(200, 250);
        this.alt2 = random(275, 375);
    }

    dibujarfondo(amp) {
        this.tamamp = map(amp, AMP_MIN, AMP_MAX, 100, 300);
        image(this.canvasFondo, 0, 0);
        blendMode(BLEND);
        background(this.color1, 50, 50, 50);
        rectMode(CENTER);
        imageMode(CENTER)
        tint(this.color2, 100, 100, 100);
        image(this.cuadradofondo2, width/2, height/2, this.anch1, this.alt1);
        tint(47, 25, 27);
        image(this.cuadradofondo, width/2, height/2, this.anch2, this.alt2);
        fill(this.color3, 100, 100, 100);
        ellipse(width / 2, height / 2, this.tamamp, this.tamamp);
    }

    actualizarColores(c2, c3, c4) {
        this.targetColor1 = c2;
        this.targetColor2 = c3;
        this.targetColor3 = c4;
    }

    cambiar() {
        this.anch1 = random(250, 300);
        this.alt1 = random(375, 475);
        this.anch2 = random(200, 250);
        this.alt2 = random(275, 375);
    }
}