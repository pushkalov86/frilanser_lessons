function getRandomNumbers (current) {
  let numbersArray = [];
  const abc = "АВЕІКМНОРСТХ";
  const naturalNumber = "0123456789";
  let randomLetter = abc[Math.floor(Math.random() * abc.length)];
  let randomNumber = naturalNumber[Math.floor(Math.random() * naturalNumber.length)];

  for (let i = 0; i < current; i++) {
    let newNumber = "";
    while (newNumber.length < 2) {
      newNumber += randomLetter;
      randomLetter = abc[Math.floor(Math.random() * abc.length)];
    }
    while (newNumber.length >= 2 && newNumber.length < 6) {
      newNumber += randomNumber;
      randomNumber = naturalNumber[Math.floor(Math.random() * naturalNumber.length)];
    }
    while (newNumber.length >= 6 && newNumber.length < 8) {
      newNumber += randomLetter;
      randomLetter = abc[Math.floor(Math.random() * abc.length)];
    }
    numbersArray.push(newNumber);
  }

  return numbersArray;
}

function isFirstLetter(randomNumbers) {
  let current = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i][0] === "А") {
      current++;
    }
  }
  return current;
}

function isFirstLastLetter(randomNumbers) {
  let current = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i][0] === randomNumbers[i][7]) {
      current++;
    }
  }
  return current;
}

function isFiveSimbol(randomNumbers) {
  let current = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i].length < 5) {
      current++;
    }
  }
  return current;
}

const current = parseInt(prompt(`Введіть кількість номерних знаків`));

const randomNumbers = getRandomNumbers(current);
document.write(randomNumbers);
document.write(`<br><br>`);

const firstLetter = isFirstLetter(randomNumbers);
document.write(`Номерів починається на букву А - ${firstLetter}.`);
document.write(`<br><br>`);

const firstLastLetter = isFirstLastLetter(randomNumbers);
document.write(`Номерів починається і закінчується на однакову букву - ${firstLastLetter}.`);
document.write(`<br><br>`);

const fiveSimbol = isFiveSimbol(randomNumbers);
document.write(`Номерів які містять менше ніж 5 символів - ${fiveSimbol}.`);
document.write(`<br><br>`);
