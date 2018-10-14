class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stopped.`);
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    constructor() {
      super()
    }
    hide() {
      alert(`${this.name} hides!`);
    }
  }

  const x = new Rabbit();
  console.log(x);