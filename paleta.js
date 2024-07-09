class Paleta{

    constructor( imagen_ ){
        this.imagen = imagen_;
    }

    darUnColor( alfa_ = 255,x,y ){
        let x1 = x;
        let y1 = y;
        let elColor = this.imagen.get( x1 , y1 );
        
        return color( red(elColor) , green(elColor) , blue( elColor ) , alfa_ );
    }
}   