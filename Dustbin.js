class Dustbin{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("basket2.png");
      World.add(world, this.body);
    }
    display(){
     push();
    imageMode(CENTER);
    image(this.image, 600,330, this.width, this.height);
    pop();
    }
}

   