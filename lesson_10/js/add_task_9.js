function getResultArray(n) {
  let currentArray = new Array(n).fill(1);
  let resultArray = [];

  currentArray.forEach((element, index) => {
    resultArray.push(index * index);
  })

  return resultArray;
};

const n = parseInt(prompt(`Введіть кількість елементів масиву`));

const resultArray = getResultArray(n);
document.write(resultArray);
