const num = parseInt(prompt('Введіть номер дня тижня від 0 (неділя) до 6(субота)'));
let result = '';
if (num === 0 || num === 6) {
  result = 'Цей день є вихідним';
} else if (num > 0 && num < 6) {
  result = 'Цей день є робочим';
} else result = 'Ви ввели некоректне значення';

document.write(result);
