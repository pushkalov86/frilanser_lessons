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

function getLastPriceMore1000(randomArray) {
  let lastPrice = randomArray.findLast(element => element > 1000);
  return lastPrice;
}

const lastPriceMore1000 = getLastPriceMore1000(randomArray);
document.write(`Остання ціна більша за 1000: ${lastPriceMore1000}.`);
