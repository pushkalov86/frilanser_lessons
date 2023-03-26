function randomArrray(current) {
  current = parseInt(prompt(`Введіть кількість елементів массиву`));
  // const resultArray = new Array(current);
  // let initialIndex = 0;

  // for (let item of resultArray) {
  //   if (initialIndex < 5) {
  //     resultArray[initialIndex] = 1;
  //   } else {
  //     resultArray[initialIndex] = 7;
  //   }
  //   initialIndex++;
  // }

  const resultArray = new Array(current);
  resultArray.fill(7, 0, current).fill(1, 0, 5);
console.log(resultArray);
  return resultArray;
}

document.write(randomArrray());
