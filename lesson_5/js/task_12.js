const imgNumberMin = 1;
const imgNumberMax = 4;
let img1 = 0;
let img2 = 0;
let img3 = 0;
let img4 = 0;


for (let i = 0; i < 3; i++) {
  let randomImg = imgNumberMin + Math.floor(Math.random() * (imgNumberMin + imgNumberMax - 1));
  switch(randomImg) {
    case 1:  document.write(`<img class="lesson5_12" src="/lesson_5/img/1.png" alt="">`);
      img1 += 1;
    break;
    case 2:  document.write(`<img class="lesson5_12" src="/lesson_5/img/2.png" alt="">`);
      img2 += 1;
    break;
    case 3:  document.write(`<img class="lesson5_12" src="/lesson_5/img/3.png" alt="">`);
      img3 += 1;
    break;
    case 4:  document.write(`<img class="lesson5_12" src="/lesson_5/img/4.png" alt="">`);
      img4 += 1;
    break;
  }
}

if (img1 === 3) {
  document.write(`<p>Ваш виграш складає 100 грн</p>`)
} else if ( img2 === 3) {
  document.write(`<p>Ваш виграш складає 200 грн</p>`)
} else if ( img3 === 3) {
  document.write(`<p>Ваш виграш складає 500 грн</p>`)
} else if ( img4 === 3) {
  document.write(`<p>Ваш виграш складає 1000 грн</p>`)
}
