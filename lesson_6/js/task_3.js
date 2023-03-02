function sum (num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}

function mult (num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

function averageValue (num1, num2, num3, num4) {
  return ((num1 + num2 + num3 + num4) / 4).toFixed(2);
}

function minValue (num1, num2, num3, num4) {
  let result;
  if (num2 - num1 >= 0 && num3 - num1 >= 0 && num4 - num1 >= 0) {
    result = num1;
  } else if (num1 - num2 >= 0 && num3 - num2 >= 0 && num4 - num2 >= 0) {
    result = num2;
  } else if (num1 - num3 >= 0 && num2 - num3 >= 0 && num4 - num3 >= 0) {
    result = num3;
  } else if (num1 - num4 >= 0 && num2 - num4 >= 0 && num3 - num4 >= 0) {
    result = num4;
  }
  return result;
}

const num1 = parseFloat(prompt(`Введіть перше число`));
const num2 = parseFloat(prompt(`Введіть друге число`));
const num3 = parseFloat(prompt(`Введіть третє число`));
const num4 = parseFloat(prompt(`Введіть четверте число`));

const result1 = sum(num1, num2, num3, num4);
const result2 = mult(num1, num2, num3, num4);
const result3 = averageValue(num1, num2, num3, num4);
const result4 = minValue(num1, num2, num3, num4);
document.write(`
  Сумма чисел дорівнює ${result1}.<br>
  Добуток чисел дорівнює ${result2}.<br>
  Середнє значення чисел дорівнює ${result3}.<br>
  Мінімальне число з чотритьох є ${result4}.
`);
