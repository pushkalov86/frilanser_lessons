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
console.log(randomArray);

function getMaxPrice (randomArray) {
  let result = randomArray.reduce((prevElement, element) => (element > prevElement ? element : prevElement))
  return result;
}

const maxPrice = getMaxPrice(randomArray);
document.write(`Максимальна ціна: ${maxPrice}.<br><br>`);

function getPriceInPercentArray(randomArray) {
  let result = randomArray.map(element => +(element * 100 / maxPrice).toFixed(1));
  return result;
}

const priceInPercentArray = getPriceInPercentArray(randomArray);
document.write(`Масив у відсотках: ${priceInPercentArray}`);
