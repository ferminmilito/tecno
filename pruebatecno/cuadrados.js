class cuadrados {
    constructor(c1, c2, c3, c4) {
        this.canvasCuadrados = createGraphics(400, 600);
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
        this.anch = random(180, 200);
        this.alt = random(250, 300);
        this.x1 = random(100, 120);
        this.y1 = random(130, 160);
        this.x2 = random(280, 320);
        this.y2 = random(120, 150);
        this.x3 = random(120, 145);
        this.y3 = random(430, 470);
        this.x4 = random(280, 320);
        this.y4 = random(430, 470);
        this.img1 = loadImage('data/rect1.png');
        this.img2 = loadImage('data/rect2.png');
        this.img3 = loadImage('data/rect3.png');
        this.img4 = loadImage('data/rect4.png');
        this.fondo = new fondo(this.c2, this.c3, this.c4);
    }

    dibujarcuadrados(frec) {
        this.fondo.dibujarfondo(frec);  // Pasa la frecuencia actualizada
        image(this.canvasCuadrados, 0, 0);
        blendMode(LIGHTEST);
        rectMode(CENTER);
        noStroke();
        ellipseMode(CENTER);
        tint(this.c1, 100, 100, 100);
        imageMode(CENTER);
        image(this.img1, this.x1, this.y1, this.anch, this.alt);
        image(this.img2, this.x2, this.y2, this.anch, this.alt);
        image(this.img3, this.x3, this.y3, this.anch, this.alt);
        image(this.img4, this.x4, this.y4, this.anch, this.alt);
    }

    actualizarColores(c1, c2, c3, c4) {
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
        this.fondo.actualizarColores(c2, c3, c4);
    }
}