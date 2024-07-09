class cuadrados {
    constructor(c1, c2, c3, c4) {
        this.canvasCuadrados = createGraphics(400, 600);
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
        this.targetC1 = c1;
        this.targetC2 = c2;
        this.targetC3 = c3;
        this.targetC4 = c4;
        this.anch = random(190, 210);
        this.alt = random(275, 320);
        this.x1 = random(100, 120);
        this.y1 = random(130, 160);
        this.x2 = random(280, 320);
        this.y2 = random(120, 150);
        this.x3 = random(100, 120);
        this.y3 = random(430, 470);
        this.x4 = random(280, 320);
        this.y4 = random(430, 470);
        this.img1 = loadImage('data/rect1.png');
        this.img2 = loadImage('data/rect5.png');
        this.img3 = loadImage('data/rect2.png');
        this.img4 = loadImage('data/rect6.png');
        this.img5 = loadImage('data/rect3.png');
        this.img6 = loadImage('data/rect7.png');
        this.img7 = loadImage('data/rect4.png');
        this.img8 = loadImage('data/rect8.png');
        this.randomImage1 = Math.random() < 0.5 ? this.img1 : this.img2; 
        this.randomImage2 = Math.random() < 0.5 ? this.img3 : this.img4;
        this.randomImage3 = Math.random() < 0.5 ? this.img5 : this.img6;
        this.randomImage4 = Math.random() < 0.5 ? this.img7 : this.img8;
        this.fondo = new fondo(this.c2, this.c3, this.c4);
    }





    dibujarcuadrados(amp) {
        this.fondo.dibujarfondo(amp);  // Pasa la frecuencia actualizada
        image(this.canvasCuadrados, 0, 0);
        blendMode(LIGHTEST);
        rectMode(CENTER);
        noStroke();
        ellipseMode(CENTER);
        tint(this.c1, 100, 100, 200);
        imageMode(CENTER);
        image(this.randomImage1, this.x1, this.y1, this.anch, this.alt);
        image(this.randomImage2, this.x2, this.y2, this.anch, this.alt);
        image(this.randomImage3, this.x3, this.y3, this.anch, this.alt);
        image(this.randomImage4, this.x4, this.y4, this.anch, this.alt);

        // Actualiza los colores usando lerpColor
        this.c1 = lerpColor(this.c1, this.targetC1, 0.05);
        this.c2 = lerpColor(this.c2, this.targetC2, 0.05);
        this.c3 = lerpColor(this.c3, this.targetC3, 0.05);
        this.c4 = lerpColor(this.c4, this.targetC4, 0.05);

        // Actualiza los colores del fondo también
        this.fondo.color1 = lerpColor(this.fondo.color1, this.fondo.targetColor1, 0.05);
        this.fondo.color2 = lerpColor(this.fondo.color2, this.fondo.targetColor2, 0.05);
        this.fondo.color3 = lerpColor(this.fondo.color3, this.fondo.targetColor3, 0.05);
    }

    actualizarColores(c1, c2, c3, c4) {
        this.targetC1 = c1;
        this.targetC2 = c2;
        this.targetC3 = c3;
        this.targetC4 = c4;
        this.fondo.actualizarColores(c2, c3, c4);
    }


    cambiar() {
        this.anch = random(190, 210);
        this.alt = random(275, 320);
        this.x1 = random(100, 120);
        this.y1 = random(130, 160);
        this.x2 = random(280, 320);
        this.y2 = random(120, 150);
        this.x3 = random(100, 120);
        this.y3 = random(430, 470);
        this.x4 = random(280, 320);
        this.y4 = random(430, 470);
        this.fondo.cambiar();
    }
}
