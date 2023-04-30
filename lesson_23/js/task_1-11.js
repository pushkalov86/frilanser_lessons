// const str = '1234-1234-1234-1234\b 5555-qqqq-8888-eeee\b 9999-4444-8888-777\b 1111-2222-3333-4444';
const str1 = '1234-1234-1234-1234';
const str2 = '5555-qqqq-8888-eeee';
const str3 = '9999-4444-8888-777';
const str4 = '1111-2222-3333-4444';
let exp = /\d{4}-\d{4}-\d{4}-\d{4}/
let result1 = exp.test(str1);
let result2 = exp.test(str2);
let result3 = exp.test(str3);
let result4 = exp.test(str4);


document.write(`${str1}<br>`);
document.write(`${result1}<br>`);
document.write(`${str2}<br>`);
document.write(`${result2}<br>`);
document.write(`${str3}<br>`);
document.write(`${result3}<br>`);
document.write(`${str4}<br>`);
document.write(`${result4}<br>`);



