class fondo {
    constructor(c2, c3, c4) {
        this.canvasFondo = createGraphics(400, 600);
        this.color1 = c2;
        this.color2 = c3;
        this.color3 = c4;
        this.targetColor1 = c2;
        this.targetColor2 = c3;
        this.targetColor3 = c4;
        this.anch1 = random(180, 230);
        this.alt1 = random(250, 495);
    }

    dibujarfondo(amp) {
        this.tamamp = map(amp, AMP_MIN, AMP_MAX, 100, 300);
        image(this.canvasFondo, 0, 0);
        blendMode(BLEND);
        background(this.color1, 50, 50, 50);
        fill(this.color2, 100, 100, 100);
        rectMode(CENTER);
        rect(width / 2, height / 2, this.anch1, this.alt1);
        fill(this.color3, 100, 100, 100);
        ellipse(width / 2, height / 2, this.tamamp, this.tamamp);
    }

    actualizarColores(c2, c3, c4) {
        this.targetColor1 = c2;
        this.targetColor2 = c3;
        this.targetColor3 = c4;
    }
}