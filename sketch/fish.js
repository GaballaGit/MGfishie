class Fish {
  constructor(position) {
    this.position = position.copy();
    this.width = 200;
    this.height = 10;
  }

  run() {
    this.swim();
    this.display();
  }

  swim() {
    this.position.x += random(-10, 10);
    this.position.y += random(-10, 10);
  }

  display() {
    // Body
    noStroke();
    fill(255, 125, 125);
    ellipse(this.position.x, this.position.y, this.width, this.height);

    // Tail
    triangle(
      this.position.x - this.width / 2 + 10,
      this.position.y,
      this.position.x - this.width * 0.75,
      this.position.y + this.height / 3,
      this.position.x - this.width * 0.75,
      this.position.y - this.height / 3
    );

    // Eye
    fill(255, 255, 255);
    circle(this.position.x + this.width / 2 - 10, this.position.y - 10, 40);

    // Pupil
    fill(0, 0, 0);
    circle(this.position.x + this.width / 2 - 4, this.position.y - 10, 25);

    //test
    text("why", this.position.x, this.position.y, 20,20);
  }

  getMouthPosition() {
    return createVector(this.position.x + this.width / 2 + 10, this.position.y);
  }
}
