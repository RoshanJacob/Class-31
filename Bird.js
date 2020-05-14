class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[]
   // [[x0,y0],[x1,y1]]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    //if( this.body.position.x > 200 && this.body.velocity.x > 5 && gameState === "launched"){
      if(this.body.velocity.x > 5 && gameState === "launched"){
    var position =[this.body.position.x,this.body.position.y]
    this.trajectory.push(position);
    for(var x =0;this.trajectory.length>x;x++){
      image(this.smokeImage,this.trajectory[x][0],this.trajectory[x][1]);
    }
  }
  }
}
