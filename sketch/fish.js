class Fish {
  constructor(position) {
    this.position = position.copy();
    this.width = 100;
    this.height = 60;
  }

  run() {
    this.swim();
    this.display();
  }

  swim() {
    this.position.x += random(-1, 1);
    this.position.y += random(-1, 1);
  }

  display() {
    // Body
    noStroke();
    fill(255, 191, 0);
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
    circle(this.position.x + this.width / 2 - 10, this.position.y - 10, 20);

    // Pupil
    fill(0, 0, 0);
    circle(this.position.x + this.width / 2 - 10, this.position.y - 10, 8);
  }

  getMouthPosition() {
    return createVector(this.position.x + this.width / 2 + 10, this.position.y);
  }
}
