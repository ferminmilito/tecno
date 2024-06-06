class Obra {
    constructor() {
      this.color = random(0,120);
      this.color2 = random(120,240);
      this.color3 = random(240,360);
      this.anch= random(180,210);
      this.alt= random (250,315);
      this.anch1= random(180,230);
      this.alt1= random (250,495);
      this.x1= random(100,120);
      this.y1=random(130,160);
      this.x2= random(280,320);
      this.y2=random(120,150);
      this.x3= random(120.140);
      this.y3=random(430,470);
      this.x4= random(280,320);
      this.y4=random(430,470);
      this.ellipanc=random(100,200);
      this.ellipalt=random(150,300);
    }
  
    dibujar() {
      
      rectMode(CENTER);
      noStroke();
      ellipseMode(CENTER);
      fill(this.color2,100,100,100)
      rect(width/2,height/2,this.anch1,this.alt1)
      fill(this.color3,100,100,100)
      ellipse(width/2, height/2,this.ellipanc,this.ellipalt);
      tint(this.color,100,100,100);
      imageMode(CENTER);
      image(img1,this.x1,this.y1,this.anch,this.alt);
      image(img2,this.x2,this.y2,this.anch,this.alt);
      image(img3,this.x3,this.y3,this.anch,this.alt);
      image(img4,this.x4,this.y4,this.anch,this.alt);
      noLoop();
    }


      cambiocolor() {
        this.color=random(0,360);
        this.color2=random(0,360);
        this.color3=random(0,360);
        background(random(0,360),20,100,100);
        
      }


    }
  