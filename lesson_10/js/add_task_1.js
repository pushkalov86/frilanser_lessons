function getResultArray(current) {
  let resultArray = new Array(current);
  resultArray.fill(1).fill(0, 1, current - 1);
  return resultArray;
};

const resultArray = getResultArray(17);
document.write(resultArray);
