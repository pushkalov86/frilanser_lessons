function getResult(name, adress, src) {

  return `<a href=` + adress + `><img src=` + src + ` width="100px" height="100px" alt="`+ name + `"></a>`
}

const nameG = prompt(`Введіть назву пошукової платформи, наприклад "Google"`, `Google`);
const adress = prompt(`Введіть адрес посилання пошукової платформи, наприклад "https://Google.com"`, `https://Google.com`);
const src = prompt(`Введіть місцезнаходження логотипа сайту, наприклад "/lesson_6/img/logo.svg"`, `/lesson_6/img/logo.svg`);

const result = getResult(nameG, adress, src);
document.write(result);
