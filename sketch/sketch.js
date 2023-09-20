let fish, bubbles;

function setup() {
  createCanvas(400, 400);
  fish = new Fish(new createVector(width / 2, height / 2));
  bubbles = new ParticleSystem(fish.getMouthPosition());
}

function draw() {
  background(17, 78, 117);
  bubbles.run();
  bubbles.origin = fish.getMouthPosition();
  if (frameCount % 10 === 0) {
    bubbles.addParticle();
  }
  
  fish.run();
}
