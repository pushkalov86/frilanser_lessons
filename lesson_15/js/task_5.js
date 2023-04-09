

class DanceDirector {
  constructor (boys, girls) {
    this.boys = boys;
    this.girls = girls;
  };
  getRandomBoy() {
    let randomIndexBoy = Math.floor(Math.random() * this.boys.length);
    return this.boys[randomIndexBoy];
  }
  getRandomGirl() {
    let randomIndexGirl = Math.floor(Math.random() * this.girls.length);
    return this.girls[randomIndexGirl];
  }

  getRandomCoupleDancers() {
    let randomBoy = this.getRandomBoy();
    let randomGirl = this.getRandomGirl();
    this.boys = this.boys.filter((item) => item !== randomBoy);
    this.girls = this.girls.filter((item) => item !== randomGirl);

    document.write(`Пара: ${randomBoy} - ${randomGirl}.<br>`);
  }
  run() {
    setInterval(
      () => {
        if (this.boys.length > 0) {
          this.getRandomCoupleDancers();
        }
      }, 1000
    )
  }
}

let arrBoys = ['Petro', 'Vasyl', 'Sergii', 'Oleksii'];
let arrGirls = ['Anna', 'Olga', 'Julia', 'Karina'];

let danceDirector = new DanceDirector(arrBoys, arrGirls);
danceDirector.run();
