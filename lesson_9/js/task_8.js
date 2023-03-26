function getRandomNumbers (current) {
  current = parseInt(prompt(`Введіть кількість номерних знаків`));
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

const randomNumbers = getRandomNumbers();
document.write(`Дано рандомний масив номерів: ${randomNumbers}<br><br>`);

function getresultArray(randomNumbers) {
  let resultArray = randomNumbers.filter(item => item[0] === 'А' )
  return resultArray;
};

 const resultArray = getresultArray(randomNumbers);
 document.write(`Результат : ${resultArray}`);
