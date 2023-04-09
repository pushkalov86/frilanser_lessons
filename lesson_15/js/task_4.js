class Baner {
  constructor (banerList) {
    this.banerList = banerList;
  };

  getRandomBaner() {
    let randomIndex = Math.floor(Math.random() * this.banerList.length);
    return this.banerList[randomIndex];
  };

  getShowRandomBaner() {
    let randomBaner = this.getRandomBaner();
    document.write(`<a href="${randomBaner.link}"><img src="../img/${randomBaner.img}" width="500px"></a>`);
  }
};

let banerList = [
  {
    img: 'facebook.png',
    link: 'https://facebook.com',
  },
  {
    img: 'instagram.png',
    link: 'https://instagram.com',
  },
  {
    img: 'twitter.png',
    link: 'https://twitter.com',
  },
  {
    img: 'Google.svg',
    link: 'https://google.com',
  },
];

let baner = new Baner(banerList);
baner.getShowRandomBaner();

