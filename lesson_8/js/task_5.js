function getEvaluations(current) {
  let min = 2;
  let max = 5;
  let evaluetions = [];

  for (let i = 0; i < current; i++) {
    let randomEvaluetion = min + Math.floor(Math.random() * (max - min + 1));
    evaluetions.push(randomEvaluetion);
  };

  return evaluetions;
};

function getNumbertwo(evaluetions) {
  let currentTwo = 0;
  for (let i = 0; i < evaluetions.length; i++) {
    if (evaluetions[i] === 2) {
      currentTwo++;
    }
  }
  return currentTwo;
}

function getNumberFourFive(evaluetions) {
  let currentFourFive = 0;
  for (let i = 0; i < evaluetions.length; i++) {
    if (evaluetions[i] === 4 || evaluetions[i] === 5) {
      currentFourFive++;
    }
  }
  return currentFourFive;
}

function getNumberThree(evaluetions) {
  let currentThree = 0;
  for (let i = 0; i < evaluetions.length; i++) {
    if (evaluetions[i] === 2 || evaluetions[i] === 3) {
      currentThree++;
    }
  }
  return currentThree;
}

const current = parseInt(prompt(`вкажіть кількість оцінок`));
const evaluetions = getEvaluations(current);
document.write(`Послідовність оцінок учня ${evaluetions}.<br><br>`);
const NumberFourFive = getNumberFourFive(evaluetions);
document.write(`Кількість хороших оцінок учня -  ${NumberFourFive}.<br><br>`);
const NumberThree = getNumberThree(evaluetions);
document.write(`Кількість оцінок учня нижче середнього -  ${NumberThree}.<br><br>`);
