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

function getLastIndexPriceMore1000(randomArray) {
  let lastPriceIndex = randomArray.findLastIndex(element => element > 1000);
  return lastPriceIndex;
}

const lastPriceIndex = getLastIndexPriceMore1000(randomArray);
document.write(`Індекс останньої ціни, яка більша за 1000: ${lastPriceIndex}.`);
