function getComputerChoice(){
    let rannum = Math.floor(Math.random() * 3) + 1;
    let com_choice = (rannum == 1)? "Rock":
        (rannum == 2) ? "Paper":
        (rannum == 3) ? 'Scissors':
        com_choice = rannum
    return com_choice; 
}

function RPS (playerSelection, computerSelection){
    let winner =
     (playerSelection == computerSelection) ? "You both pick " + playerSelection + ", We have a DRAW!":
     (playerSelection == 'rock' && computerSelection == 'paper') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Lost!":
     (playerSelection == 'rock' && computerSelection == 'scissors') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Win!!":
     (playerSelection == 'scissors' && computerSelection == 'rock') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Lose!":
     (playerSelection == 'scissors' && computerSelection == 'paper') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Win!!":
     (playerSelection == 'paper' && computerSelection == 'scissors') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Lose!":
     (playerSelection == 'paper' && computerSelection == 'rock') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Win!!":
     playerSelection + " is an invalid bet"
    console.log(winner)
    return winner
}

let playerSelection = prompt("Choose your bet, Rock, Paper or Scissors");
let computerSelection = getComputerChoice();
document.getElementById("result").innerHTML = RPS(playerSelection.toLowerCase(), computerSelection.toLowerCase());