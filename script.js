let gameboard_Values = [];
let gameboard_Elements = [];
let gameboard_Background = document.querySelector('.board-Background');
let current_Player = true;


for(let i = 0; i < 9; i++) {
    let temp = document.createElement('div');
    temp.value = i;
    temp.classList.add('play-Area');
    temp.textContent = ('');
    temp.addEventListener('click', function() {
        playTurn.turnPlayed(this);
    })
    gameboard_Background.appendChild(temp);
    gameboard_Elements.push(temp);
    console.table(gameboard_Elements);
}

const player = (element) => {
    let score;
    let playerID = element;
    const getScore = () => score;
    const setScore = () => score++;

    return {setScore, getScore};
}

function swapPlayer () {

    let current_Player_text = document.querySelector('.next');

    current_Player = !current_Player;

    if(current_Player) {
        current_Player_text.textContent = ('<-- X');
    } else {
        current_Player_text.textContent = ('O -->');
    }
    playTurn.updateCurrentPlayer(current_Player);
}

let turnsPlayed = 0;

const playTurn = (() => {
    let activePlayer;
    
    const updateCurrentPlayer = (current) => {
        activePlayer = current;
    }

    const turnPlayed = (element) => {
        console.log(`${element.value} Clicked`);
        if(element.textContent == '') {
            activePlayer ? element.textContent = ('X') : element.textContent = ('O');
            turnsPlayed = turnsPlayed + 1;
            swapPlayer();
            checkVictory();
        }
    }

    const checkVictory = () => {
        if(turnsPlayed >= 0) {
            
            // Check col
            for(let i = 0; i <= 2; i++) {
                if(gameboard_Elements[i].textContent == gameboard_Elements[3 + i].textContent && gameboard_Elements[i + 6].textContent == gameboard_Elements[i].textContent) {
                    if(gameboard_Elements[i].textContent != '') {
                        console.log(`${gameboard_Elements[i].textContent} Wins Col in spot ${i}`);
                        return displayWinner(gameboard_Elements[i].textContent);
                    }
                }
            }

            // Check row
            for(let i = 0; i <= 2; i++) {
                if(gameboard_Elements[0 + (i * 3)].textContent == gameboard_Elements[1 + (i * 3)].textContent && gameboard_Elements[2 + (i * 3)].textContent == gameboard_Elements[0 + (i * 3)].textContent) {
                    if(gameboard_Elements[0 + (i * 3)].textContent != '') {
                        console.log(`${gameboard_Elements[i * 3].textContent} Wins Row`);
                        return displayWinner(gameboard_Elements[0 + (i * 3)].textContent);
                    }
                }
            }

            //check \
            if(gameboard_Elements[0].textContent == gameboard_Elements[4].textContent && gameboard_Elements[8].textContent == gameboard_Elements[0].textContent) {
                if(gameboard_Elements[0].textContent != '') {
                    console.log(`${gameboard_Elements[0].textContent} Wins `);
                    return displayWinner(gameboard_Elements[0].textContent);
                }
            }

            //check /
            if(gameboard_Elements[2].textContent == gameboard_Elements[4].textContent && gameboard_Elements[6].textContent == gameboard_Elements[2].textContent) {
                if(gameboard_Elements[2].textContent != '') {
                    console.log(`${gameboard_Elements[2].textContent} Wins /`);
                    return displayWinner(gameboard_Elements[2].textContent);
                }
            }
        }
    }


    const displayWinner = (winner) => {
        let current_Player_text = document.querySelector('.next');
        let player1_Score = document.querySelector('.primary-Score');
        let player2_Score = document.querySelector('.second-Score');

        if(winner == 'X') {
            Player1.setScore();
            current_Player_text.textContent = ('X Wins!')
            player1_Score.textContent = (player1.getscore());
        }
    }

    return {updateCurrentPlayer, turnPlayed};
})();

let player1 = player(1);
let player2 = player(2);

swapPlayer();