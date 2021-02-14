let cardPairArray = [];
let wonPair = 1;
let checkedPairs = 1;
const numberOfPairs = 8;
const DELAY = 800;
const cardsContainer = document.querySelector('.all-cards-container');
const wonMessage = document.querySelector('.won-message');
const cards = ['arya', 'cercei', 'daenerys', 'hodor', 'jamie', 'jon-snow', 'melissandre', 'tyrion'];
const shuffledCards = [...cards, ...cards];
shuffledCards.sort(() => 0.5 - Math.random());

document.addEventListener('DOMContentLoaded', () => {
  createCards();
});

function createCards() {
  shuffledCards.forEach((el) => {
    const card = document.createElement('div');
    card.className = 'card-container';
    card.dataset.cardValue = el;
    card.innerHTML = `
      <div class="flipper">
        <div class="front"></div>
        <div class="back">
          <img src="assets/cards/${el}.jfif" alt="card" class="card-image"/>
        </div>
      </div>  
    `;
    cardsContainer.append(card);
  });
  addClick();
}

function openCard({ target }) {
  const clickedCard = target.closest('.card-container');
  movesNumber();

  if (clickedCard && !clickedCard.classList.contains('flipped')) {
    clickedCard.classList.add('flipped');
    cardPairArray.push(clickedCard);
  }

  if (cardPairArray.length === 2) {
    if (cardPairArray[0].dataset.cardValue === cardPairArray[1].dataset.cardValue) {
      setTimeout(() => {
        addAnimation();
      }, DELAY / 2);
      removePair();
    } else {
      flipBack();
    }
    removeClick();
    setTimeout(() => {
      addClick();
    }, DELAY);
    checkedPairs++;
  }
}

function flipBack() {
  setTimeout(() => {
    cardPairArray.forEach((card) => {
      card.classList.remove('flipped');
    });
    cardPairArray = [];
  }, DELAY);
}

function removePair() {
  setTimeout(() => {
    cardPairArray.forEach((card) => {
      card.classList.add('hidden');
    });
    cardPairArray = [];
    wonPair++;
  }, DELAY);
  ifWon();
}

function addAnimation() {
  cardPairArray.forEach((card) => {
    const image = card.querySelector('.card-image');
    image.parentNode.removeChild(image);
    card.querySelector('.back').classList.add('fire');
  });
}

function movesNumber() {
  document.querySelector('.moves').innerHTML = `Number of moves is <strong>${checkedPairs}</strong>`;
}

function ifWon() {
  if (wonPair === 1) {
    setTimeout(() => {
      cardsContainer.style.opacity = '0';
      setTimeout(() => {
        wonMessage.style.display = 'block';
        wonMessage.style.opacity = '1';
      }, DELAY);
    }, DELAY * 2);
  }
}

function addClick() {
  cardsContainer.addEventListener('click', openCard);
}

function removeClick() {
  cardsContainer.removeEventListener('click', openCard);
}
