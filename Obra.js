class Obra {

    constructor() {
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
      this.cuadrados = new cuadrados(this.c1, this.c2, this.c3, this.c4);
    }
  
    dibujar() {

      this.cuadrados.dibujarcuadrados();
   }
     cambiocolor() {

      }

    manejarTecla(keyCode){
       if(keyIsDown(RIGHT_ARROW)){
        this.c1=  this.miPaleta1.darUnColor(150);
        this.c2=  this.miPaleta1.darUnColor(150);
        this.c3=  this.miPaleta1.darUnColor(150);
        this.c4=  this.miPaleta1.darUnColor(150);
        this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
       }
       if(keyIsDown(LEFT_ARROW)){
        this.c1=  this.miPaleta.darUnColor(150);
        this.c2=  this.miPaleta.darUnColor(150);
        this.c3=  this.miPaleta.darUnColor(150);
        this.c4=  this.miPaleta.darUnColor(150);
        this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
       }
       if(keyIsDown(UP_ARROW)){
        this.c1=  this.miPaleta2.darUnColor(150);
        this.c2=  this.miPaleta2.darUnColor(150);
        this.c3=  this.miPaleta2.darUnColor(150);
        this.c4=  this.miPaleta2.darUnColor(150);
        this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
       }
       if(keyIsDown(DOWN_ARROW)){
        this.c1=  this.miPaleta3.darUnColor(150);
        this.c2=  this.miPaleta3.darUnColor(150);
        this.c3=  this.miPaleta3.darUnColor(150);
        this.c4=  this.miPaleta3.darUnColor(150);
        this.cuadrados.actualizarColores(this.c1, this.c2, this.c3, this.c4);
       }
      //  if(keyIsDown(UP_ARROW)){
      //   this.ellipalt= this.ellipalt +1;
      //  }
      }

      

      // manejarTecla(keyCode){
      //   this.cuadrados.manejarTecla(keyCode);
      // }
     



      }



