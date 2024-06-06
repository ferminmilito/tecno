
class fondo {

    constructor (c2,c3,c4){
        this.canvasFondo= createGraphics(400,600);
        this.color1 =c2;
        this.color2 =c3;
        this.color3 =c4;
        this.anch1= random(180,230);
        this.alt1= random (250,495);
        this.ellipanc=random(100,150);
        this.ellipalt=random(150,200);
    }

    dibujarfondo() {
        image(this.canvasFondo,0,0);
        blendMode(BLEND);
        background (this.color1,50,50,50)
        fill(this.color2,100,100,100)
        rectMode(CENTER);
        rect(width/2,height/2,this.anch1,this.alt1)
        fill(this.color3,100,100,100)
        ellipse(width/2, height/2,mouseX,mouseY);
     }

     actualizarColores(c2, c3, c4) {
        this.color1 = c2;
        this.color2 = c3;
        this.color3 = c4;
      }

      

    //   manejarTecla(keyCode){
    //    if(keyIsDown(RIGHT_ARROW)){
    //     this.ellipanc= this.ellipanc +1;
    //    }
    //    if(keyIsDown(UP_ARROW)){
    //     this.ellipalt= this.ellipalt +1;
    //    }
    //   }


}