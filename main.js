const cards = ['arya', 'cercei', 'daenerys', 'hodor', 'jamie', 'jon-snow', 'melissandre', 'sansa', 'tyrion', 'unella'];
cards.sort(() => 0.5 - Math.random());

let row;
let card;
const rowNum = 4;
const colNum = 5;
const container = document.querySelector('.cards-container');

function createRows() {
  row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);
}

function createCards() {
  card = document.createElement('div');
  card.className = 'card';
  row.appendChild(card);
}

function addImages() {
  cards.forEach((el) => {
    card.style.backgroundImage = `url("assets/cards/${el}.jfif")`;
  });
}

function addCards() {
  for (let i = 0; i < rowNum; i++) {
    createRows();
    for (let j = 0; j < colNum; j++) {
      createCards();
      addImages();
    }
  }
}

addCards();
