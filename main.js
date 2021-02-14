let cardPairArray = [];
let checkedPairs = 0;
const DELAY = 800;
const ANIMATION_DELAY = 400;
const cardsContainer = document.querySelector('.all-cards-container');
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

  if (clickedCard && !clickedCard.classList.contains('flipped')) {
    clickedCard.classList.add('flipped');
    cardPairArray.push(clickedCard);
    ifWon();
  }

  if (cardPairArray.length === 2) {
    if (cardPairArray[0].dataset.cardValue === cardPairArray[1].dataset.cardValue) {
      setTimeout(() => {
        addAnimation();
      }, ANIMATION_DELAY);
      removePair();
    } else {
      flipBack();
    }
    removeClick();
    setTimeout(() => {
      addClick();
    }, DELAY);
  }
}

function flipBack() {
  setTimeout(() => {
    cardPairArray.forEach((card) => {
      card.classList.remove('flipped');
    });
    cardPairArray = [];
    checkedPairs++;
  }, DELAY);
}

function removePair() {
  setTimeout(() => {
    cardPairArray.forEach((card) => {
      card.classList.add('hidden');
    });
    cardPairArray = [];
    checkedPairs++;
  }, DELAY);
}

function addAnimation() {
  cardPairArray.forEach((card) => {
    const image = card.querySelector('.card-image');
    image.parentNode.removeChild(image);
    card.querySelector('.back').classList.add('fire');
  });
}

function ifWon() {
  console.log(checkedPairs);
}

function wonMessage() {}

function addClick() {
  cardsContainer.addEventListener('click', openCard);
}

function removeClick() {
  cardsContainer.removeEventListener('click', openCard);
}
