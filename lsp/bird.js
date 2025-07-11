class Bird {
  fly() {
    return "Flying high!";
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

function makeItFly(bird) {
  console.log(bird.fly());
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeItFly(sparrow);
makeItFly(penguin);
