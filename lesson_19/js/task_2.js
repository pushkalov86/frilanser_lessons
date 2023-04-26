class sportsComands {
  constructor (players) {
    this.players = players;
  }

  addArrow () {
    this.freeArrow = '../images/arrow_green.png';
    this.comandArrow = '../images/arrow_red.jpg';
  }

  addFreePlayers() {
    for (let player of this.players) {
      const sportsman = document.createElement('div');
      sportsman.className = 'sportsman';
      const playerName = document.createElement('div');
      playerName.innerText = player;
      sportsman.append(playerName);
      this.freePlayersComand.append(sportsman);
      const imgArrow = document.createElement('img');
      imgArrow.className = 'arrow';
      imgArrow.src = this.freeArrow;
      sportsman.append(imgArrow);
    }
  }

  addComandPlayers (sportsman, imgArrow) {
    if (!sportsman.classList.contains('active')) {
      sportsman.classList.add('active');
      sportsman.remove();
      this.comandPlayers.append(sportsman);
      imgArrow.src = this.comandArrow;
    } else {
      sportsman.classList.remove('active');
      sportsman.remove();
      this.freePlayersComand.append(sportsman);
      imgArrow.src = this.freeArrow;
    }
  }

  render(containerSelector) {

    this.addArrow();
    const freePlayersDiv = document.createElement('div');
    freePlayersDiv.className = 'freePlayers';
    const freePlayersTitle = document.createElement('div');
    freePlayersTitle.innerText = 'Загальний список';
    freePlayersDiv.append(freePlayersTitle);
    this.freePlayersComand = document.createElement('div');
    this.freePlayersComand.classList.add('freePlayersComand');
    freePlayersDiv.append(this.freePlayersComand);
    this.addFreePlayers();

    const comandPlayerDiv = document.createElement('div');
    comandPlayerDiv.className = 'comandPlayers';
    const comandPlayerTitle = document.createElement('div');
    comandPlayerTitle.innerText = 'Обрані для змагання';
    comandPlayerDiv.append(comandPlayerTitle);
    this.comandPlayers = document.createElement('div');
    this.comandPlayers.className = 'comandPlayer';
    comandPlayerDiv.append(this.comandPlayers);

    const targetContainer = document.querySelector(containerSelector);
    targetContainer.append(freePlayersDiv);
    targetContainer.append(comandPlayerDiv);

    const arrowList = document.querySelectorAll('.arrow');
    const playerList = document.querySelectorAll('.sportsman');

    for (let i = 0; i < this.players.length; i++) {
      playerList[i].onclick = this.addComandPlayers.bind(this, playerList[i], arrowList[i]);
    }
  }
}

const players = ['Olga', 'Sveta', 'Anna', 'Kate', 'Oksana'];


const result = new sportsComands(players).render('.container');
