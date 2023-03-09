const currentArray = parseInt(prompt(`Введіть кількість елементів массиву`));

function getRandomArray(currentArray) {
 const min = 0;
 const max = 3000;
 
 let randomArray = [];
 for (let i = 0; i < currentArray; i++) {
   const randomElement = min + Math.floor(Math.random()*(max - min + 1));
   randomArray.push(randomElement);
 }

 return randomArray;
}

const randomArray = getRandomArray(currentArray);
document.write(`Випадковий массив: ${randomArray}<br><br>`);

function getResultArray(randomArray) {
 let resultArray = [];
 const discount = 0.3;
//  for (let item of randomArray) {
//    if (item > 1000) {
//      resultArray.push(+(item - item * 0.3).toFixed(2));
//    } else {
//     resultArray.push(item);
//    }
//  }
//  return resultArray;
// }
  randomArray.forEach(element => {
    if (element > 1000) {
      resultArray.push(+(element - element * discount).toFixed(2));
    } else {
      resultArray.push(element);
    }
  })
  return resultArray;
};

const resultArray = getResultArray(randomArray);
document.write(`Результат зі знижкою 30 відсотків на товари вартістю більше 1000: ${resultArray}<br><br>`);
