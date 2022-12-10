document.addEventListener('DOMContentLoaded', () => {


//This array is what establishes the card tiles that are used in the game//
const tileArray = [
    {
        name: 'axe',
        img: 'assets/img/axe.png'
    },
    {
        name: 'axe',
        img: 'assets/img/axe.png'
    },
    {
        name: 'halberd',
        img: 'assets/img/halberd.png'
    },
    {
        name: 'halberd',
        img: 'assets/img/halberd.png'
    },
    {
        name: 'hammer',
        img: 'assets/img/hammer.png'
    },
    {
        name: 'hammer',
        img: 'assets/img/hammer.png'
    },
    {
        name: 'mace',
        img: 'assets/img/mace.png'
    },
    {
        name: 'mace',
        img: 'assets/img/mace.png'
    },
    {
        name: 'spear',
        img: 'assets/img/spear.png'
    },
    {
        name: 'spear',
        img: 'assets/img/spear.png'
    },
    {
        name: 'sword',
        img: 'assets/img/sword.png'
    },
    {
        name: 'sword',
        img: 'assets/img/sword.png'
    }
   
]    



const tiles = document.querySelector('.tiles');


function generateBoard() {
    for (let i = 0; i < tileArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/img/dragon.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', revealCard);
        tiles.appendChild(card);
    }
}

function revealCard() {
    if (tilesPicked.length < 2) {
        let tileId = this.getAttribute('data-id');
        tilesPicked.push(tileArray[tileId].name);
        tilesPickedId.push(tileId);
        this.setAttribute('src', tileArray[tileId].img);
        if (tilesPicked.length === 2) {
            setTimeout(isCorrect, 500)
        }
    }
}

generateBoard();































})
