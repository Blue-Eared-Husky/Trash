class Ground{
    constructor(x,y,w,h){
        this.sprite = Bodies.rectangle(x,y,w,h,{isStatic : true});
        World.add(world,this.sprite);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    display(){
        fill("#F7FF0B");
        rect(this.x,this.y,this.w,this.h);
    }
}