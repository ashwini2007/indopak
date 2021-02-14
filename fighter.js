class Soldier {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("soldier.png");
      World.add(world, this.body);
      console.log(this.body.velocityX)
    }
    display(){
      var pos =this.body.position;
      //this.body.position.x = mouseX;
    this.body.position.y = mouseY;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };