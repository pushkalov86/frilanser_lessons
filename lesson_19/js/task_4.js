class Stars {
  constructor (numberStars, imgSrc, minSize, maxSize) {
    this.numberStars = numberStars;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.imgSrc = imgSrc;
  }

  getRandomPosition() {
    return 1 + Math.floor(Math.random() * 95);
  };
  getRandomStep () {
    return 1 + Math.floor(Math.random() * 25 );
  }

  render (selectorContainer) {
    for (let i = 0; i < this.numberStars; i++) {
      const imgStar = document.createElement('img');
      imgStar.className = 'star';
      imgStar.src = this.imgSrc;
      imgStar.style.width = this.minSize + 'px';
      imgStar.style.left = this.getRandomPosition() + '%';
      imgStar.style.top = this.getRandomPosition() + '%';
      document.querySelector(selectorContainer).append(imgStar);
      const step = this.getRandomStep();
      setInterval(() => {
        imgStar.style.transition = `width 2s ease-in-out 0s`;
        imgStar.style.width = parseFloat(imgStar.style.width) + step + 'px';

        if (parseInt(imgStar.style.width) > this.maxSize) {
          imgStar.style.transition = 'none';
          imgStar.style.width = this.minSize + 'px';
          imgStar.style.left = this.getRandomPosition() + '%';
          imgStar.style.top = this.getRandomPosition() + '%';
        }
      }, 1000);
    }
  }
}

const stars = new Stars(20, '../images/star.jpg', 20, 35)
stars.render('.container')
