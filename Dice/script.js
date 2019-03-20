const start = document.getElementById('StartBtn');
let name = document.getElementById('Name');
const reset = document.getElementById('Reset');
const img = document.querySelector(".DiceImg");
let total = document.getElementById("Total");

// dice starts at 0
let currentScore = 0;


//start button, on click of the start button run the result, then add to current score

function diceResult (){
        const random=Math.floor(Math.random()*6)+1;
        img.src=`./img/dice${random}.png`;
        if (random == 1) {
            gameOver();
            document.getElementById('Total').textContent=currentScore;
            return 0;
        } else { 
        return random;
        }
    }
// return ends the function and gives the value to the random variable
     
function diceAdd (diceScore){
    currentScore+=diceScore;
    document.getElementById('Total').textContent=currentScore;
    if (currentScore >=20) {
        win();
        winAlert();
    }
}

function win () {
    name.textContent = "WINNER!!!!!!";
    currentScore=0;
}

function winAlert () {
    alert("WINNER!!!!");
}

function gameOver () { 
    name.textContent = "GAME OVER!!!!!";
    currentScore=0;
}

function gameOverAlert () {
    alert("GAME OVER!!!!");
}

start.addEventListener('click', () => {
        diceScore = diceResult(); 
        diceAdd(diceScore);
        })

reset.addEventListener('click', () => {
    total.textContent = 0;
    name.textContent = "Player 1";
    })
