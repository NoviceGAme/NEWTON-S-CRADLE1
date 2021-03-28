class rope {

    constructor(body1,body2,offsetX,offsetY){

      this.offsetX=offsetX
      this.offsetY=offsetY
var options ={
    bodyA : body1,
    bodyB : body2,
    point:{x:this.offsetX, y:this.offsetY},
   // stiffness : 0.04,
    //length : 10
    //circle =new circle (ball,circle{x:50 , y:50})
}
//this.pointB =pointB

this.rope=Constraint.create(options)
World.add(world,this.rope);

}
  display(){
    
var pointA=this.ropeA.position;
var pointB=this.ropeB.position;
    strokeWeight(2);
    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    



  }


 }