function getExpirationDate () {
  const year = parseInt(prompt('Введіть рік виробництва йогурту'));
  const month = parseInt(prompt('Введіть місяць виробництва йогурту'));
  const day = parseInt(prompt('Введіть день виробництва йогурту'));
  const garantDay = parseInt(prompt('Введіть кількість днів придатності йогурту'));
  const startDay = new Date(year, month - 1, day);
  const currentDate = startDay.setDate(garantDay);
  if (currentDate < new Date()) {
    return 'Йогурт просрочений'
  } else return 'Йогурт придатний до вживання'
}
const result = getExpirationDate();
document.write(result);
