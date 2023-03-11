function getResultArray(current) {
  let currentArray = new Array(current).fill(0);

  let resultArray = [];
  let resultNumber = 0;
  currentArray.forEach((element) => {
    resultNumber = resultNumber + 3;
    resultArray.push(resultNumber);
  });
  return resultArray.reverse();
};

const current = parseInt(prompt(`Введіть кількість елементів масиву`));

const resultArray = getResultArray(current);
document.write(resultArray);
