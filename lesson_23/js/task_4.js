function howTimeSolutionLesson () {
  const rundomNumber = (min = 1, max = 100) => {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  const date1 = new Date();
  let number1 = rundomNumber();
  let number2 = rundomNumber();
  let res1 = number1 + number2;
  const task1 = `${number1} + ${number2} = `;
  let result1 = parseInt(prompt(task1));
  let diff1;
  if (res1 === result1) {
    const date2 = new Date();
    diff1 = date2 - date1;
  } else {
    return 'Почніть спочатку, Ви не вірно вирішили приклад'
  }
  const date3 = new Date();
  let number3 = rundomNumber();
  let number4 = rundomNumber();
  let res2 = number3 + number4;
  const task2 = `${number3} + ${number4} = `;
  let result2 = parseInt(prompt(task2));
  let diff2;
  if (res2 === result2) {
    const date4 = new Date();
    diff2 = date4 - date3;
  } else {
    return 'Почніть спочатку, Ви не вірно вирішили приклад'
  }
  if (diff1 < diff2) {
    return 'Перший приклад ви розвязали скоріше';
  } else {
    return 'Другий приклад ви розвязали скоріше';
  }
}

const r1 = howTimeSolutionLesson();
document.write(r1);
