document.addEventListener('DOMContentLoaded', () => {


//This array is what establishes the card tiles that are used in the game//
const tileArray = [
    {
        name: 'axe',
        img: 'img/axe.png'
    },
    {
        name: 'axe',
        img: 'img/axe.png'
    },
    {
        name: 'halberd',
        img: 'img/halberd.png'
    },
    {
        name: 'halberd',
        img: 'img/halberd.png'
    },
    {
        name: 'hammer',
        img: 'img/hammer.png'
    },
    {
        name: 'hammer',
        img: 'img/hammer.png'
    },
    {
        name: 'mace',
        img: 'img/mace.png'
    },
    {
        name: 'mace',
        img: 'img/mace.png'
    },
    {
        name: 'spear',
        img: 'img/spear.png'
    },
    {
        name: 'spear',
        img: 'img/spear.png'
    },
    {
        name: 'sword',
        img: 'img/sword.png'
    },
    {
        name: 'sword',
        img: 'img/sword.png'
    },
   
]    

const tiles = document.querySelector('.tiles');

function generateBoard () {
    for (let i = 0; i < tileArray.length; i++) {
        var card = document.createElement('imgs');
        card.setAttribute('src', 'img/dragon.png');
        card.setAttribute('data-id', i);
        // card.addEventListener('clicked', revealCard);
        tiles.appendChild(card);

    }
}

generateBoard();































})
