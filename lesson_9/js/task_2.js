function randomArrray(current) {
  current = parseInt(prompt(`Введіть кількість елементів массиву`));
  // const resultArray = [];
  // for (let i = 0; i < current; i++) {
  //   if (i < (current / 2)) {
  //     resultArray.push(1);
  //   } else {
  //     resultArray.push(7);
  //   }
  // }
  const resultArray = new Array(current);
  resultArray.fill(1, 0, Math.ceil(current / 2)).fill(7, Math.ceil(current / 2), current);

  return resultArray;
}

document.write(randomArrray());
