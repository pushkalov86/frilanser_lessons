const checkNum = parseInt(prompt('Введіть число для навчання'));

class MultChecker {
  constructor (checkNum) {
    this.checkNum = checkNum;
    this.correctAnswer = 0;
    this.wrongAnswer = 0;
  }

  generationExample() {
    let randomNumber = 1 + Math.floor(Math.random() * 9);
    let example = this.checkNum * randomNumber;
    return {randomNumber, example};
  }

  VerificationExample() {
    let generation = this.generationExample();
    let exampleLesson = parseInt(prompt(`Вкажіть значення виразу: ${this.checkNum} * ${generation.randomNumber} =`));
    if (exampleLesson !== generation.example) {
      this.wrongAnswer = this.wrongAnswer + 1;
      confirm('Не правильна відповідь, продовжуємо навчання?') ? this.VerificationExample() : this.render();
    } else {
      this.correctAnswer = this.correctAnswer + 1;
      confirm('Правильна відповідь, продовжуємо навчання?') ? this.VerificationExample() : this.render();
    }
  }

  render() {
    document.write(`Число, яке ми вивчаємо: ${this.checkNum}<br>`);
    document.write(`Кількість правильних відповідей: ${this.correctAnswer}.<br>`);
    document.write(`Кількість не правильних відповідей: ${this.wrongAnswer}.<br>`)
  }
}

const multChecker = new MultChecker(checkNum);
multChecker.VerificationExample();
