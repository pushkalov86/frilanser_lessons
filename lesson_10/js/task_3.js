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

function getBigPriceIndexArray(randomArray) {
  let result = [randomArray[0]];
  randomArray.forEach((element, index, baseArr) => {
    if (result[result.length - 1] < baseArr[index]) {
      result.push(element);
    }
  });
  return result;
}

// function getBigPriceIndexArray(randomArray) {
//   let result = [randomArray[0]];
//   randomArray.forEach((element) => {
//     if (element > result[result.length - 1]) {
//       result.push(element);
//     }
//   });
//   return result;
// }

const bigPriceIndexArray = getBigPriceIndexArray(randomArray);
document.write(`Масив індексів: ${bigPriceIndexArray}`);
