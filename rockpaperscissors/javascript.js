let scorehuman = parseInt(document.querySelector("#scorehuman").innerText);
let scorepc = parseInt(document.querySelector("#scorepc").innerText);
let round = parseInt(document.querySelector("#round").innerText);
let end = false

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let output = getRandomInt(3);
    if (output < 1) {
        return "rock";
    } else if (output > 1) {
        return "scissors";
    } else {
        return "paper";
    }
}


let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {

    if (end) {
        scorehuman = 0;
        scorepc = 0;
        round = 0;
        document.querySelector("#scorehuman").innerText = scorehuman;
        document.querySelector("#scorepc").innerText = scorepc;
        document.querySelector("#round").innerText = round;
        document.querySelector('#result').innerText = "";
        end = false;
    }

    let target = event.target;

    switch(target.id) {
        case 'rock':
            decideWinner('rock');
            break;
        case 'paper':
            decideWinner('paper');
            break;
        case 'scissors':
            decideWinner('scissors');
            break;
    }
});

function checkStatus(){
    if (round === 5){
        if (scorehuman > scorepc){
            document.querySelector('#result').innerHTML = "Human SUPREMACY &#x1F4AA;";
        } else if (scorehuman < scorepc){
            document.querySelector('#result').innerHTML = "Robot SUPREMACY &#x1F641;";
        } else {
            document.querySelector('#result').innerHTML = "It's a &#x1F454;";
        }
        end = true;
    }
}

function decideWinner(choice_human){
    choice_pc = getComputerChoice()

    if (choice_human === choice_pc){
    } else if (choice_human === "rock" && choice_pc === "scissors"){
        scorehuman += 1;
    } else if (choice_human === "paper" && choice_pc === "rock"){
        scorehuman += 1;
    } else if (choice_human === "scissors" && choice_pc === "paper"){
        scorehuman += 1;
    } else {
        scorepc += 1
    }

    round+=1;
    document.querySelector("#scorehuman").innerText = scorehuman;
    document.querySelector("#scorepc").innerText = scorepc;
    document.querySelector("#round").innerText = round;

    checkStatus()

}


// this is just a merge test