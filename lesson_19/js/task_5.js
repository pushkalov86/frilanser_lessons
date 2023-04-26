class tank {
  constructor ( imgSrc, maxWidth, maxHeight, heightTank) {
    this.imgSrc = imgSrc;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.heightTank = heightTank;
  }

  getRandomNumber(min, max) {
    return parseInt(min + Math.random() * (max - min + 1));
  }


  setClickTank (babah) {
    this.tank.src = babah;
    this.value = 1;
  }

  render(selectorId) {
    const field = document.createElement('div');
    field.className = 'field';
    field.style.border = '2px solid black';
    field.style.height = this.maxHeight + 'px';
    field.style.width = this.maxWidth + 'px';
    field.style.position = 'relative';
    document.querySelector(selectorId).append(field);
    this.tank = document.createElement('img');
    this.tank.className = 'tank';
    this.tank.style.position = 'absolute';
    this.tank.style.left = this.getRandomNumber(0, 96) + '%';
    this.tank.style.top = 0 + 'px';
    this.tank.style.height = this.heightTank;
    this.tank.src = this.imgSrc;
    field.append(this.tank);
    const score = 30;
    const heightTank = parseInt(this.heightTank);
    this.tank.onclick = this.setClickTank.bind(this, '../images/babah.jpg');

    let func = setInterval(() => {
      this.tank.style.top = parseInt(this.tank.style.top) + score + 'px';
      if (this.value === 1) {
        clearInterval(func);
        this.tank.src = '';
      }

      if (parseInt(this.tank.style.top) + heightTank > parseInt(this.maxHeight)) {
        this.tank.style.top = 0 + 'px';
        this.tank.style.left = this.getRandomNumber(0, 96) + '%';
      }

    }, 300);


  }
}

let Tank = new tank('../images/tank.png', 1000, 800, 85).render('.container');
