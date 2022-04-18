let gameboard_Values = [];
let gameboard_Elements = [];
let gameboard_Background = document.querySelector('.board-Background');
let current_Player = true;

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
        // Check col
        for(let i = 0; i <= 2; i++) {
            if(gameboard_Elements[i].textContent == gameboard_Elements[3 + i].textContent && gameboard_Elements[i + 6].textContent) {
                console.log(`${gameboard_Elements[i].textContent} Wins Col`);
            }
        }

        // Check row
        for(let i = 0; i <= 2; i++) {
            console.log(3 + (i * 3));
            if(gameboard_Elements[0 + (i * 3)].textContent == gameboard_Elements[1 + (i * 3)].textContent && gameboard_Elements[2 + (i * 3)].textContent) {
                console.log(`${gameboard_Elements[i * 3].textContent} Wins Row`);
            }
        }

        //check \
        if(gameboard_Elements[0].textContent == gameboard_Elements[4].textContent && gameboard_Elements[8].textContent) {
            console.log(`${gameboard_Elements[0].textContent} Wins `);
        }

        //check /
        if(gameboard_Elements[2].textContent == gameboard_Elements[4].textContent && gameboard_Elements[6].textContent) {
            console.log(`${gameboard_Elements[2].textContent} Wins /`);
        }
    }

    return {updateCurrentPlayer, turnPlayed};
})();

swapPlayer();