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

function getNumberPriceMore1000(randomArray) {
  let numberPriceMore1000 = 0;
  randomArray.forEach(element => {
    if (element > 1000) {
    numberPriceMore1000++;
    };
  });
  return numberPriceMore1000;
}
const numberPriceMore1000 = getNumberPriceMore1000(randomArray);
document.write(`Кількість цін, вищих за 1000: ${numberPriceMore1000}`);
