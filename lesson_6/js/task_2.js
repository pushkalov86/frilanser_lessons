function getWorkingDay(numberDay) {
  // let result = numberDay > 0 && numberDay <= 5 ? 'робочий' : 'вихідний';
  let result;
  if (numberDay > 0 && numberDay <= 5) {
    result = 'робочий';
  } else if (numberDay > 5 && numberDay <= 7) {
    result = 'вихідний';
  } else {
    result = 'не коректне значення';
  }

  
  return numberDay + ` день тижня є ` + result + ` день.`;
}

const numberDay = parseInt(prompt('Введіть день тижня'));
const workingDay = getWorkingDay(numberDay);
document.write(workingDay);
