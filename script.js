let gameboard_Values = [];
let gameboard_Elements = [];
let gameboard_Background = document.querySelector('.board-Background');

let player_One_Configurator = document.querySelector('.input-One');
player_One_Configurator.style.display = 'none';

let player_Two_Configurator = document.querySelector('.input-Two');
player_Two_Configurator.style.display = 'none';

for(let i = 0; i < 9; i++) {
    let temp = document.createElement('div');
    temp.value = i;
    temp.classList.add('play-Area');
    gameboard_Background.appendChild(temp);
    gameboard_Elements.push(temp);
}

const player = (element, ) => {
    let score;
    let playerID = element.value;
    const getScore = () => score;
    const setScore = () => score++;

}

const nextTurn = (playerID, playAreaValue) => {



}

function showBoard(element) {
    let inputOne = document.querySelector('');
}

function showForm(element) {
    console.log('show form clicked' + element.value);
    let test = element.value;
    switch(test) {
        case 0:
            console.log('0');
            player_One_Configurator.style.display = 'flex';
            break;
        
        case 1:
            console.log('2');
            player_Two_Configurator.style.display = 'flex';4
            break;
    }
}