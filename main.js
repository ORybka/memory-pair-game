const cards = ['arya', 'cercei', 'daenerys', 'hodor', 'jamie', 'jon-snow', 'melissandre', 'tyrion'];
const shuffledCards = [...cards, ...cards];
shuffledCards.sort(() => 0.5 - Math.random());

const container = document.querySelector('.all-cards-container');

function createCards() {
  shuffledCards.forEach((el) => {
    const card = document.createElement('div');
    card.className = 'card-container';
    card.setAttribute('onclick', "this.classList.toggle('hover')");
    card.innerHTML = `
      <div class="flipper">
        <div class="front"></div>
        <div class="back">
          <img src="assets/cards/${el}.jfif" alt="card" class="card-image"/>
        </div>
      </div>  
    `;
    container.append(card);
  });
}

createCards();
