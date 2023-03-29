let namesArray=['Innesa', 'Inna', 'Marina', 'Natalia', 'Sveta', 'Anna', 'Olga', 'Julia'];
document.write(`Масив імен: ${namesArray}<br>`);
function getSortNames(namesArray) {
  let change;
  do {
    change=false;
    for (let i = 1; i < namesArray.length; i++) {
      if (namesArray[i - 1] > namesArray[i]) {
        let temp = namesArray[i - 1];
        namesArray[i - 1] = namesArray[i];
        namesArray[i] = temp;
        change = true;
      }
    }
  } while (change);
  return namesArray;
}
getSortNames(namesArray);
document.write(`Відсортований масив: ${namesArray}<br>`);

function includeFiveSymbols(namesArray, fiveSymb) {
  let start = 0;
  let end = namesArray.length - 1;
  while (start<=end) {
    const middle=Math.floor((start+end)/2);
    if (namesArray[middle].length === fiveSymb) return middle;
    if (namesArray[middle].length < fiveSymb) start = middle + 1;
    if (namesArray[middle].length > fiveSymb) end = middle - 1;
  };
  return -1;
};

const fiveSymbol = includeFiveSymbols(namesArray,5);
if (fiveSymbol !== -1) {
  document.write(`Ім'я довжиною 5 символів ${namesArray[fiveSymbol]} у масиві знаходиться за індексом ${fiveSymbol}<br>`);
} else {
  document.write('У масиві відсутне ім"я довжиною 5 символів.');
};
