const str = 'https://kmu.gov.ua';
let exp = /\w.gov.ua/;
let result = exp.test(str);

document.write(`${str}<br>`);
document.write(`${result}<br>`);

