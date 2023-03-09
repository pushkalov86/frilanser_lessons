 const currentArray = parseInt(prompt(`Введіть кількість елементів массиву`));

 function getRandomArray(currentArray) {
  const min = 0;
  const max = 200;
  
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
  // let resultArray = [];
  // for (let item of randomArray) {
  //   if (item > 100) {
  //     resultArray.push(item);
  //   }
  // }
  let resultArray = randomArray.filter(element => element > 100);
  return resultArray;
}

const resultArray = getResultArray(randomArray);
document.write(`Числа з массиву більші за 100: ${resultArray}<br><br>`);
