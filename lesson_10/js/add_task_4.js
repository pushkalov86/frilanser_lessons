function getResultArray(current, x, d) {
  let currentArray = new Array(current).fill(0);

  let resultArray = [];
  currentArray.forEach((element, index) => {
    element = x + d * index;
    resultArray.push(element);
  });
  return resultArray;
};

const current = parseInt(prompt(`Введіть кількість елементів масиву`));
const x = parseInt(prompt(`Введіть значення першого елементу`));
const d = parseInt(prompt(`Введіть значення різниці`));

const resultArray = getResultArray(current, x, d);
document.write(resultArray);
