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

function isPriceLess1000 (randomArray) {
  let result = randomArray.some(element => element < 1000)
  return result;
};

const priceLess1000 = isPriceLess1000(randomArray);
if (priceLess1000) {
  document.write('Так.');
} else {document.write(`Немає.`)};
