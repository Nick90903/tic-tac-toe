let gameboard_Values = [];
let gameboard_Elements = [];
let gameboard_Background = document.querySelector('.board-Background');
let current_Player = true;

/*
let player_One_Configurator = document.querySelector('.input-One');
player_One_Configurator.style.display = 'none';

let player_Two_Configurator = document.querySelector('.input-Two');
player_Two_Configurator.style.display = 'none';
*/


for(let i = 0; i < 9; i++) {
    let temp = document.createElement('div');
    temp.value = i;
    temp.classList.add('play-Area');
    temp.addEventListener('click', function() {
        playTurn.turnPlayed(this);
    })
    gameboard_Background.appendChild(temp);
    gameboard_Elements.push(temp);
    console.table(gameboard_Elements);
}


const player = (element, ) => {
    let score;
    let playerID = element.value;
    const getScore = () => score;
    const setScore = () => score++;
}


function swapPlayer () {

    let current_Player_text = document.querySelector('.next');

    current_Player = !current_Player;

    if(current_Player) {
        current_Player_text.textContent = ('X: <--');
    } else {
        current_Player_text.textContent = ('--> :Y');
    }
    playTurn.updateCurrentPlayer(current_Player);
}

const playTurn = (() => {
    let activePlayer;

    const updateCurrentPlayer = (current) => {
        activePlayer = current;
        console.log('Update Current Player' + activePlayer);
    }

    const turnPlayed = (element) => {
        console.log(`${element.value} Clicked`);
        activePlayer ? element.textContent = ('X') : element.textContent = ('O');
        swapPlayer();
        checkVictory();
    }

    const checkVictory = () => {
        
    }

    return {updateCurrentPlayer, turnPlayed};
})();

function showBoard(element) {
    let inputOne = document.querySelector('');
}


/*
function showForm(element, property) {
    console.log('show form clicked' + element.value);
    let test = element.value;
    if(element.value == 0) {
        player_One_Configurator.style.display = (property);
        player_Two_Configurator.style.display = ('none');
    } else {
        player_Two_Configurator.style.display = (property);
        player_One_Configurator.style.display = ('none');
    }
}
*/