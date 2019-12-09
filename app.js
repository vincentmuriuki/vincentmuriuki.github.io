/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;


// DOM manipulation
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';


// let x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

// reset the roundScores and currentScore of both players to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';


// setup event handler
// what callback function is
// what anonymous function is
// other way to select items by id
// how to change the image in an <img> element

// function btn() {
//     // do sth
// }
// btn
//  a callback function is a function that is passed into another function as an argument like btn () above
// anonymous function that doesn't have a name and cannot be reused
document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score only if the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

    }
});