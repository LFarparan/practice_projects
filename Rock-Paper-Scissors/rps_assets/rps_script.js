function getComputerChoice(){
    let rannum = Math.floor(Math.random() * 3) + 1;
    let com_choice = (rannum == 1)? "rock":
        (rannum == 2) ? "paper":
        (rannum == 3) ? 'scissors':
        com_choice = rannum
    return com_choice
}

function RPS (playerSelection, computerSelection){
    let verdict =
     (playerSelection == computerSelection) ? "You both pick " + playerSelection + ", We have a DRAW!":
     (playerSelection == 'rock' && computerSelection == 'paper') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Lose!":
     (playerSelection == 'rock' && computerSelection == 'scissors') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Win!!":
     (playerSelection == 'scissors' && computerSelection == 'rock') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Lose!":
     (playerSelection == 'scissors' && computerSelection == 'paper') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Win!!":
     (playerSelection == 'paper' && computerSelection == 'scissors') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Lose!":
     (playerSelection == 'paper' && computerSelection == 'rock') ?  "You pick " +playerSelection+ " against " +computerSelection+ ", You Win!!":
     playerSelection + " is an invalid bet";
    let whoWin = (verdict.includes('You Win')) ? "player" : (verdict.includes('You Lose')) ? "computer" : "draw";
    return {announcement:verdict, winner: whoWin}
}


function startGame (){
    for (rounds = 1; rounds <= 5; rounds++){
        let isValid = false;
        let playerSelection = '';
        while (!isValid) {
            alert('Round '+ rounds);
            playerSelection = prompt("Choose your bet, Rock, Paper or Scissors").toLowerCase();
            if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')
                isValid= true;
            else {
                console.log(playerSelection + ' is an invalid input');
                alert(playerSelection + ' is an invalid input')
            }
        }
    
        let computerSelection = getComputerChoice();
        let game = RPS(playerSelection, computerSelection);
        console.log(game.announcement);
        if (game.winner == 'player'){
            playerScore++;
        }
        else if(game.winner == 'computer'){
            computerScore++;
        }
        else console.log('Draw')
        console.log("Player: " +playerScore+ "    Computer: " + computerScore);
        
    }
}

function startTally() {
    let tally = (playerScore > computerScore) ? "You Beat em AI" : (playerScore < computerScore) ? "AI Supremacy" : "Its a Draw"
    console.log(tally);
    document.getElementById("result").innerHTML = tally;
}

let playerScore = 0;
let computerScore = 0;
startGame();
startTally();