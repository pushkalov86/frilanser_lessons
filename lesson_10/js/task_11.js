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

function getFirstPriceMore1000(randomArray) {
  let firstPrice = randomArray.findIndex(element => element > 1000);
  return firstPrice;
}

const firstPriceMore1000 = getFirstPriceMore1000(randomArray);
document.write(`Перший індекс ціни більша за 1000: ${firstPriceMore1000}.`);
