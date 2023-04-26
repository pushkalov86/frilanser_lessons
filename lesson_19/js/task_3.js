class Snow {
  getRandomPositionLeft() {
     return Math.floor(Math.random() * 95)
  }
  getRandomSpeed() {
     return 1 + (Math.random() * 25) / 5
  }

  render(containerSelector) {
     this.snow = document.createElement('img')
     this.snow.className = 'snow'
     this.snow.src = '../images/Snowflakes.png'
     this.snow.style.left = this.getRandomPositionLeft() + '%'
     this.snow.style.top = '-8%'
     const speed = this.getRandomSpeed()
     setInterval(() => {
        this.snow.style.transition = 'top 0.1s ease-in-out 0s'
        this.snow.style.top = parseFloat(this.snow.style.top) + speed + '%'
        if (parseFloat(this.snow.style.top) > 105) {
           this.snow.style.transition = 'none'
           this.snow.style.top = '-8%'
           this.snow.style.left = this.getRandomPositionLeft() + '%'
        }
     }, 100)

     document.querySelector(containerSelector).append(this.snow)
  }
}

let snow = new Snow()
snow.render('.container')
