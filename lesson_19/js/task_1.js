class cardNotebook {
  constructor ({imgAdress}) {
    this.imgAdress = imgAdress;
  }

  render(containerSelector) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'img-container';

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = this.imgAdress;
    imageContainer.append(img);
    cardContainer.append(imageContainer);
    cardContainer.onmousemove = setStyle;
    cardContainer.onmouseout = setStyleOff;

    function setStyle () {
      cardContainer.classList.add('card-toggle')
    };
    function setStyleOff () {
      cardContainer.classList.remove('card-toggle')
    };

    const targetContainer = document.querySelector(containerSelector);
    targetContainer.append(cardContainer);
  }
}

let cards = [
  {
    imgAdress: '../images/1.png',
  },
  {
    imgAdress: '../images/2.png',
  },
  {
    imgAdress: '../images/3.png',
  },
  {
    imgAdress: '../images/4.png',
  }
];

for (let card of cards) {
  new cardNotebook(card).render('.cards')
};
