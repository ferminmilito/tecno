class Obra {
  constructor() {
      this.imagenPaleta = loadImage("data/arg.png");
      this.miPaleta = new Paleta(this.imagenPaleta);
      this.imagenPaleta1 = loadImage("data/colombia.png");
      this.miPaleta1 = new Paleta(this.imagenPaleta1);
      this.imagenPaleta2 = loadImage("data/brasil.png");
      this.miPaleta2 = new Paleta(this.imagenPaleta2);
      this.imagenPaleta3 = loadImage("data/francia.png");
      this.miPaleta3 = new Paleta(this.imagenPaleta3);
      this.imagenPaleta4 = loadImage("data/mexico.png");
      this.miPaleta4 = new Paleta(this.imagenPaleta4);
      this.imagenPaleta5 = loadImage("data/alemania.png");
      this.miPaleta5 = new Paleta(this.imagenPaleta5);
      this.c1 = this.miPaleta.darUnColor(150,random(0,100),random(0,100));
      this.c2 = this.miPaleta.darUnColor(150,random(100,200),random(0,100));
      this.c3 = this.miPaleta.darUnColor(150,random(200,300),random(0,100))
      this.c4 = this.miPaleta.darUnColor(150,random(300,400),random(0,100))
      this.cuadrados = new cuadrados(this.c1, this.c2, this.c3, this.c4,);
  }

  dibujar(amp) {
    let a= amp;
      this.cuadrados.dibujarcuadrados(a);
  }
      actualizar(frecuencia){
        this.cambio=map(frecuencia,0.,1,0,300)
         if(this.cambio> 0  && this.cambio<50){
          this.c1=  this.miPaleta1.darUnColor(150,random(0,100),random(0,100));
          this.c2=  this.miPaleta1.darUnColor(150,random(100,200),random(0,100));
          this.c3=  this.miPaleta1.darUnColor(150,random(200,300),random(0,100));
          this.c4=  this.miPaleta1.darUnColor(150,random(300,400),random(0,100));
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>50 && this.cambio<100){
          this.c1=  this.miPaleta.darUnColor(150,random(0,100),random(0,100));
          this.c2=  this.miPaleta.darUnColor(150,random(100,200),random(0,100));
          this.c3=  this.miPaleta.darUnColor(150,random(200,300),random(0,100));
          this.c4=  this.miPaleta.darUnColor(150,random(300,400),random(0,100));
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>100 && this.cambio<150){
          this.c1=  this.miPaleta2.darUnColor(150,random(200,300),random(0,100));
          this.c2=  this.miPaleta2.darUnColor(150,random(100,200),random(0,100));
          this.c3=  this.miPaleta2.darUnColor(150,random(0,100),random(0,100));
          this.c4=  this.miPaleta2.darUnColor(150,random(300,400),random(0,100));
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>150 && this.cambio<200){
          this.c1=  this.miPaleta3.darUnColor(150,random(200,300),random(0,100));
          this.c2=  this.miPaleta3.darUnColor(150,random(300,400),random(0,100));
          this.c3=  this.miPaleta3.darUnColor(150,random(100,200),random(0,100));
          this.c4=  this.miPaleta3.darUnColor(150,random(200,300),random(0,100));
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>200 && this.cambio<250){
          this.c1=  this.miPaleta4.darUnColor(150,random(200,300),random(0,100));
          this.c2=  this.miPaleta4.darUnColor(150,random(0,100),random(0,100));
          this.c3=  this.miPaleta4.darUnColor(150,random(100,200),random(0,100));
          this.c4=  this.miPaleta4.darUnColor(150,random(300,400),random(0,100));
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>250 && this.cambio<300){
          this.c1=  this.miPaleta5.darUnColor(150,random(100,200),random(0,100));
          this.c2=  this.miPaleta5.darUnColor(150,random(200,300),random(0,100));
          this.c3=  this.miPaleta5.darUnColor(150,random(0,100),random(0,100));
          this.c4=  this.miPaleta5.darUnColor(150,random(300,400),random(0,100));
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
  
        }


        cambiar() {
            this.cuadrados.cambiar();
        }
}


