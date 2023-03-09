function randomArrray(current) {
  current = parseInt(prompt(`Введіть кількість елементів массиву`));
  // const resultArray = [];
  // for (let i = 0; i < current; i++) {
  //   resultArray.push(0);
  // }
  const resultArray = new Array(current).fill(0);

  return resultArray;
}

document.write(randomArrray());
