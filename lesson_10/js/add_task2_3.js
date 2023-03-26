function getRandomArray(currentArray, min, max) {
  let randomArray = [];
  for (let i = 0; i < currentArray; i++) {
    const randomElement = min + Math.floor(Math.random()*(max - min + 1));
    randomArray.push(randomElement);
  };
  return randomArray;
 };
 
const randomArray = getRandomArray(10, 1, 100);
document.write(`Ваш випадковий масив цін від 1 100: ${randomArray}<br><br>`);

function getResultArray(randomArray) {
  let resultArray = [];
  let maxNumber = -1;
  let minNumber = 101;
  let maxNumberIndex = 0, minNumberIndex = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > maxNumber && randomArray[i] % 2 === 0) {
      maxNumber = randomArray[i];
      maxNumberIndex = i;
    }
    if (randomArray[i] < minNumber && randomArray[i] % 2 !== 0) {
      minNumber = randomArray[i]
      minNumberIndex = i;
    }
  }
  for (let i = 0; i < randomArray.length; i++) {
    if (i === maxNumberIndex) {
      resultArray.push(minNumber);
    }
    else if (i === minNumberIndex) {
      resultArray.push(maxNumber);
    } else resultArray.push(randomArray[i]);
  }
  if (maxNumber === -1 || minNumber === 101) {
    for (let i = 0; i < randomArray; i++) {
      resultArray.push(0);
    }
  }

  return resultArray;
};

const resultArray = getResultArray(randomArray);
document.write(resultArray);
