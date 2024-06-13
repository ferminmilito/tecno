class Obra {
  constructor(frec) {
      this.imagenPaleta = loadImage("data/sudafrica.jpg");
      this.miPaleta = new Paleta(this.imagenPaleta);
      this.imagenPaleta1 = loadImage("data/colombia.png");
      this.miPaleta1 = new Paleta(this.imagenPaleta1);
      this.imagenPaleta2 = loadImage("data/brasil.png");
      this.miPaleta2 = new Paleta(this.imagenPaleta2);
      this.imagenPaleta3 = loadImage("data/francia.png");
      this.miPaleta3 = new Paleta(this.imagenPaleta3);
      this.c1 = this.miPaleta.darUnColor(150);
      this.c2 = this.miPaleta.darUnColor(150);
      this.c3 = this.miPaleta.darUnColor(150);
      this.c4 = this.miPaleta.darUnColor(150);
      this.cuadrados = new cuadrados(this.c1, this.c2, this.c3, this.c4,);
      this.frec= frec;
  }

  dibujar() {
      this.cuadrados.dibujarcuadrados(this.frec);
  }



      actualizar(amplitud){

        this.cambio=map(amplitud,AMP_MIN,AMP_MAX,0,40)
         if(this.cambio> 0  && this.cambio<10){
          this.c1=  this.miPaleta1.darUnColor(150);
          this.c2=  this.miPaleta1.darUnColor(150);
          this.c3=  this.miPaleta1.darUnColor(150);
          this.c4=  this.miPaleta1.darUnColor(150);
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>10 && this.cambio<20){
          this.c1=  this.miPaleta.darUnColor(150);
          this.c2=  this.miPaleta.darUnColor(150);
          this.c3=  this.miPaleta.darUnColor(150);
          this.c4=  this.miPaleta.darUnColor(150);
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>20 && this.cambio<35){
          this.c1=  this.miPaleta2.darUnColor(150);
          this.c2=  this.miPaleta2.darUnColor(150);
          this.c3=  this.miPaleta2.darUnColor(150);
          this.c4=  this.miPaleta2.darUnColor(150);
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
         if(this.cambio>30){
          this.c1=  this.miPaleta3.darUnColor(150);
          this.c2=  this.miPaleta3.darUnColor(150);
          this.c3=  this.miPaleta3.darUnColor(150);
          this.c4=  this.miPaleta3.darUnColor(150);
          this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
         }
  
        }
}


