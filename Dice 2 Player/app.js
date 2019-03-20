const roll = document.getElementById("roll");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const reset = document.getElementById("reset");
const diceImg = document.getElementById("img");
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");
let total1 = document.getElementById("current-score-1");
let total2 = document.getElementById("current-score-2");
const hold = document.getElementById("hold");
let message1 = document.getElementById("player-title");
let message2 = document.getElementById("player-title2");

window.onload = start();

function diceRoll (){
    const random=Math.floor(Math.random()*6)+1;
    img.src=`./img/dice${random}.png`;
    add (random);
}

function add (score)  { //score = diceRoll result
    if (playing) { 
        currentScore[0] += score;
        score1.textContent = score;
        total1.textContent = currentScore[0];
        p1Win ();
        p1Loss();
    
    } else { 
        currentScore[1] += score;
        score2.textContent = score;
        total2.textContent = currentScore[1];
        p2Win ();
        p2Loss();
    }
}

function start () {
    playing = true;
    currentScore = [0,0];
    totalScore = [0,0];
    total1.textContent = 0;
    total2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    message1.textContent = "CURRENT";
    message2.textContent = "CURRENT";
}

function switchPlayer () {
    playing = !playing;
}

function p1Win () { 
    if (currentScore[0] >= 20) {
        message1.textContent = "WINNER!";
        setTimeout(() => {
            currentScore[0] = 0;
            score1.textContent = 0;
            score2.textContent = 0;
            total1.textContent = 0;
            total2.textContent = 0;
            message1.textContent = "CURRENT";    
        }, 2000);
    }
}

function p2Win () { 
    if (currentScore[1] >= 20) {
        message2.textContent = "WINNER!";
        setTimeout(() => {
            currentScore[1] = 0;
            score1.textContent = 0;
            score2.textContent = 0;
            total1.textContent = 0;
            total2.textContent = 0;
            message2.textContent = "CURRENT";    
        }, 2000);
    }
}

function p1Loss () {
    if (score1.textContent == 1) {
        message1.textContent = "GAME OVER!"
        setTimeout(() => {
            currentScore[0] = 0;
            score1.textContent = 0;
            score2.textContent = 0;
            total1.textContent = 0;
            total2.textContent = 0;
            message1.textContent = "CURRENT";    
        }, 2000);
    }
}

function p2Loss () {
    if (score2.textContent == 1) {
        message2.textContent = "GAME OVER!"
        setTimeout(() => {
            currentScore[1] = 0;
            score1.textContent = 0;
            score2.textContent = 0;
            total1.textContent = 0;
            total2.textContent = 0;
            message2.textContent = "CURRENT";    
        }, 2000);
    }
}

roll.addEventListener('click', diceRoll);
reset.addEventListener('click', start);
hold.addEventListener('click', switchPlayer);