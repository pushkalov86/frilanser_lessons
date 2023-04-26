class product {
  constructor (title, srcImg, numberProduct = 1, price = 19900) {
    this.title = title;
    this.srcImg = srcImg;
    this.numberProduct = numberProduct;
    this.price = price;
  }


  createNumberProduct () {
    let container = document.createElement('div');
    container.className = 'numberProduct';
    this.blockMinus = document.createElement('button');
    // let blockMinus = this.blockMinus;
    container.append(this.blockMinus);
    this.blockMinus.className = 'blockMinus';

    this.blockMinus.onclick = this.numberMinus.bind(this);
    this.blockNumber = document.createElement('div');
    this.blockNumber.className = 'blockNumber';
    container.append(this.blockNumber);
    this.blockNumber.innerText = this.numberProduct;
    this.blockPlus = document.createElement('div');
    container.append(this.blockPlus);
    this.blockPlus.className = 'blockPlus';
    this.blockPlus.onclick = this.numberPlus.bind(this);

    return container;
  }


  numberMinus() {
    if (this.numberProduct === 1) {
      this.blockMinus.setAttribute('disabled', 'true')
    } else {
      this.numberProduct = this.numberProduct - 1;
      this.blockNumber.innerText = this.numberProduct;
      this.sumDiv.innerText = ` ${this.price * this.numberProduct} грн.`;
    }
  }

  numberPlus() {
    if (this.numberProduct === 9) {
      this.blockPlus.setAttribute('disabled', 'true');
    } else {
      this.numberProduct = this.numberProduct + 1;
      this.blockNumber.innerText = this.numberProduct;
      this.blockMinus.removeAttribute('disabled');
      this.sumDiv.innerText = ` ${this.price * this.numberProduct} грн.`;
    }
  }
  createSumPriceProduct() {
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.marginLeft = '30px';
    let title = document.createElement('div');
    title.innerText = 'До оплати: ';
    title.style.fontWeight = 'bold';
    title.style.fontSize = '18px';
    container.append(title);
    this.sumDiv = document.createElement('div');
    this.sumDiv.className = 'sumDiv';
    this.sumDiv.innerText = ` ${this.price * this.numberProduct} грн.`;
    this.sumDiv.style.color = 'red';
    this.sumDiv.style.fontSize = '18px';
    this.sumDiv.style.fontWeight = 'bold';
    container.append(this.sumDiv);
    return container;
  }

  render (selectorId) {
    let card = document.createElement('div');
    card.classList.add('card');
    let imgDiv = document.createElement('div');
    card.append(imgDiv);
    let img = document.createElement('img');
    img.src = this.srcImg;
    imgDiv.append(img);
    let title = document.createElement('div');
    title.innerText = this.title;
    card.append(title);

    let numberProductDiv = this.createNumberProduct();
    card.append(numberProductDiv);
    let sumPriceProduct = this.createSumPriceProduct();
    card.append(sumPriceProduct);


    document.querySelector(selectorId).append(card);
  }
}

let Product = new product('NoteBook Asus Laptop X515EA', '../images/Notebook.webp').render('.result');