let gameboard_Values = [];
let gameboard_Elements = [];
let gameboard_Background = document.querySelector('.board-Background');

for(let i = 0; i < 9; i++) {
    let temp = document.createElement('div');
    temp.value = i;
    temp.classList.add('play-Area');
    gameboard_Background.appendChild(temp);
    gameboard_Elements.push(temp);
}

