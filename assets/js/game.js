//Add event listener to run the game when the page loads //

document.addEventListener('DOMContentLoaded', function () {


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
    },
    {
        name: 'staff',
        img: 'assets/img/staff.png'
    },
    {
        name: 'staff',
        img: 'assets/img/staff.png'
    },
    {
        name: 'katar',
        img: 'assets/img/katar.png'
    },
    {
        name: 'katar',
        img: 'assets/img/katar.png'
    }
];    

const tiles = document.querySelector('.tiles');
const earnedScore = document.querySelector('#total-points');

// Arrays that hold the collection of tiles when either chosen, matched, or incorrectly chosen//
let tilesPicked = [];
let tilesPickedId = [];
let tilesDefeated = [];
let tilesWrong = [];

//  Randmonises the tiles positions//
tileArray.sort(() => 0.5 - Math.random());

/**  This loops through the tile array and sets the dragon icon over the weapon images, and applies other attributes to the tiles like the data-id of its array position*/
function generateBoard() {

    for (let i = 0; i < tileArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/img/dragon.png');
        card.setAttribute('data-id', i);
        card.setAttribute('alt', 'image of dragon token');
        card.addEventListener('click', revealCard);
        tiles.appendChild(card);
    }
}

/**  This function calls after bing clicked and removed the generated dragon image to reveal the weapon under it and collecting the tiles then calls the function to check if they are the same*/
function revealCard() {
    this.style.pointerEvents = "none";

    if (tilesPicked.length < 2) {
        let tileId = this.getAttribute('data-id');
        tilesPicked.push(tileArray[tileId].name);
        tilesPickedId.push(tileId);
        this.setAttribute('src', tileArray[tileId].img);
            if (tilesPicked.length === 2) {
                setTimeout(isCorrect, 500);
            }
    }
}

/**  This function checks if the selected pair match, if so it alerts and makes matching pair unclickable and then increases the score by 100*/
/**  If wrong the code allows the tiles to be clickable again, and then deducts points from the score, returning the cards back to the dragon icon*/
function isCorrect() {

    let cards = document.querySelectorAll('img');
    const choiceOneId = tilesPickedId[0];
    const choiceTwoId = tilesPickedId[1];

        if (tilesPicked[0] === tilesPicked[1]) {
         alert('You have got a match!');
            cards[choiceOneId].setAttribute('src', 'assets/img/gold.png');
            cards[choiceTwoId].setAttribute('src', 'assets/img/gold.png');
            cards[choiceOneId].style.pointerEvents = "none";
            cards[choiceTwoId].style.pointerEvents = "none";
            tilesDefeated.push(tilesPicked);
        } else {
            cards[choiceOneId].setAttribute('src', 'assets/img/dragon.png');
            cards[choiceTwoId].setAttribute('src', 'assets/img/dragon.png');
            cards[choiceOneId].style.pointerEvents = "auto";
            cards[choiceTwoId].style.pointerEvents = "auto";
            alert('Sorry, try again');
            tilesWrong.push(tilesPicked);
        }

    tilesPicked = [];
    tilesPickedId = [];
    earnedScore.textContent =(Math.max(0, (((tilesDefeated.length) * 100) - ((tilesWrong.length) * 20))));

        if (tilesDefeated.length === tileArray.length/2) {
            earnedScore.textContent = ('You have won! With a score of ' + earnedScore.textContent);
    
        }
}

/**  This function calls the game to run*/
generateBoard();

});
