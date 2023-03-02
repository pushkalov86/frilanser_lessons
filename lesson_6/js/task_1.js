function getNameMonth(numberDayMonth) {
  let month;
  switch (numberDayMonth) {
    case 1:
      month = 'січень';
      break;
    case 2:
      month = 'лютий';
      break;
    case 3:
      month = 'березень';
      break;
    case 4:
      month = 'квітень';
      break;
    case 5:
      month = 'травень';
      break;
    case 6:
      month = 'червень';
      break;
    case 7:
      month = 'липень';
      break;
    case 8:
      month = 'серпень';
      break;
    case 9:
      month = 'вересень';
      break;
    case 10:
      month = 'жовтень';
      break;
    case 11:
      month = 'листопад';
      break;
    case 12:
      month = 'грудень';
      break;
    default:
      month = 'Error';
  }
  
  return numberDayMonth + ` місяць року є ` + month + `.`;
}

const numberDayMonth = parseInt(prompt('Введіть номер місяця'));
const nameMonth = getNameMonth(numberDayMonth);
document.write(nameMonth);
