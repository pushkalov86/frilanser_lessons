function getResult(num1, num2, num3) {
  let current1 = 0;
  if (num1 % 2 === 0) {
    current1++;
  }
  if (num2 % 2 === 0) {
    current1++;
  }
  if (num3 % 2 === 0) {
    current1++;
  }

  let current2 = 0;
  if(num1 > 0) {
    current2++;
  }
  if(num2 > 0) {
    current2++;
  }
  if(num3 > 0) {
    current2++;
  }

  let current3 = 0;
  if(num1 - 100 > 0) {
    current3++;
  }
  if(num2 - 100 > 0) {
    current3++;
  }
  if(num3 - 100 > 0) {
    current3++;
  }

  return 'Числа: ' + num1 +', ' + num2 + ', ' + num3 + '<br>'
    + 'З них парні: ' + current1 + ',' + '<br>'
    + 'З них додатні: ' + current2 + ',' + '<br>'
    + 'З них більші за 100: ' + current3 + ',' + '<br>'
}

const num1 = parseFloat(prompt(`Введіть перше число`));
const num2 = parseFloat(prompt(`Введіть друге число`));
const num3 = parseFloat(prompt(`Введіть третє число`));

const result = getResult(num1, num2, num3);
document.write(result);
