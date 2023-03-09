function randomArrray(current) {
  current = parseInt(prompt(`Введіть кількість елементів массиву`));
  const resultArray = new Array(current);
  let initialIndex = 0;

  for (let item of resultArray) {
    if (initialIndex < 5) {
      resultArray[initialIndex] = 1;
    } else {
      resultArray[initialIndex] = 7;
    }
    initialIndex++;
  }
console.log(resultArray);
  return resultArray;
}

document.write(randomArrray());
