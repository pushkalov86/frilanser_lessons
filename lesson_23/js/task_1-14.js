const str = '+380503075084';
let exp = /\W38\d{10}/;
let result = exp.test(str);

document.write(`${str}<br>`);
document.write(`${result}<br>`);
