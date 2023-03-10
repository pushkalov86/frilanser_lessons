function getRandomArray(currentArray, min, max) {
 let randomArray = [];
 for (let i = 0; i < currentArray; i++) {
   const randomElement = min + Math.floor(Math.random()*(max - min + 1));
   randomArray.push(randomElement);
 };
 return randomArray;
};

const randomArray = getRandomArray(10, 1, 10000);
document.write(`Ваш випадковий масив цін від 1 10000: ${randomArray}<br><br>`);

function getBigPriceArray(randomArray) {
  let result = randomArray.filter(element => element > 1000);
  return result;
};

const bigPriceArray = getBigPriceArray(randomArray);
document.write(`Результат: ${bigPriceArray}.`);
