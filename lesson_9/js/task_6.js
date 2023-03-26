const currentArray = parseInt(prompt(`Введіть кількість елементів массиву`));

function getRandomArray(currentArray) {
 const min = 0;
 const max = 10;
 
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
  randomArray.forEach((element, index, baseArr) => {
    if (element > baseArr[0]) {
      baseArr[index] = element * 2;
    }
  });

  return randomArray;
 }

document.write(`Результат: ${getResultArray(randomArray)}<br><br>`);

