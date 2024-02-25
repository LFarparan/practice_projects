function getComputerChoice(){
    let rannum = Math.floor(Math.random() * 3) + 1;
    let com_choice = (rannum == 1)? "Rock":
        (rannum == 2) ? "Paper":
        (rannum == 3) ? 'Scissors':
        com_choice = rannum
    return com_choice; 
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
     playerSelection + " is an invalid bet"
    let whoWin = (verdict.includes('You Win')) ? "player" : (verdict.includes('You Lose')) ? "computer" : "draw"
    return {announcement:verdict, winner: whoWin}
}


function startGame (){
    for (rounds = 1; rounds <= 5; rounds++){
        let isValid = false;
        let playerSelection = '';
        while (!isValid) {
            let playerSelection = prompt("Choose your bet, Rock, Paper or Scissors").toLocaleLowerCase();
            console.log(playerSelection)
            if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')
                isValid= true;
            else console.log('Input is invalid')
        }
        let computerSelection = getComputerChoice();
        console.log(playerSelection)
        let game = RPS(playerSelection, computerSelection.toLowerCase())
        console.log(game.announcement)
        if (game.winner == 'player'){
            playerScore++
        }
        else if(game.winner == 'computer'){
            computerScore++
        }
        else console.log('Draw')

        console.log("Player: " +playerScore+ "    Computer: " + computerScore);
        document.getElementById("result").innerHTML = game.announcement;
    }
}

function startTally() {
    let tally = (playerScore > computerScore) ? "You Beat em AI" : (playerScore < computerScore) ? "AI Supremacy" : "Its a Draw"
    console.log(tally)
}

let playerScore = 0;
let computerScore = 0;

startGame()
startTally()