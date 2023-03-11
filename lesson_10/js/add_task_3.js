function getResultArray(current) {
  let currentArray = new Array(current).fill(0);
  let temp = -1;
  let resultArray = [];
  currentArray.forEach(() => {

    resultArray.push(temp += 2);
  });
  return resultArray;
};

const resultArray = getResultArray(17);
document.write(resultArray);
