console.log("hello, world!")

const getComputerChoice =()=>{
    const compOptions = ['rock','paper','scissors']

    const randomizeOption = Math.floor(Math.random() * compOptions.length)

   const randomRes = compOptions[randomizeOption]
    
     let computerImageHandler =  document.getElementById("computer-choice-img")
     computerImageHandler.src=`./images/${randomRes}.png`

   return randomRes
}
let drawCount=0
let playerWin= 0
let computerWin=0
const playRound=(playerSelection, computerSelection)=>{


  

    playerSelection = playerSelection.toLowerCase()
    //rock
    if (playerSelection === "rock" && computerSelection==="rock"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'DRAW';
        drawCount +=1
    }
    if (playerSelection === "rock" && computerSelection==="paper"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'You Lose! Paper beats Rock';
        computerWin += 1
    }
    if (playerSelection === "rock" && computerSelection==="scissors"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'You Win! Scissors beats Rock';
        playerWin +=1
      
    }

    //paper
    if (playerSelection === "paper" && computerSelection==="paper"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'Draw';
        drawCount +=1
    }
    if (playerSelection === "paper" && computerSelection==="rock"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'You Win! Paper beats Rock';
        playerWin +=1
        
    }
    if (playerSelection === "paper" && computerSelection==="scissors"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'You Lose! Scissors beats Paper';
   
        computerWin += 1
    }

    //scissors
    if (playerSelection === "scissors" && computerSelection==="scissors"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'Draw';
        drawCount +=1
    }
    if (playerSelection === "scissors" && computerSelection==="rock"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'You Lose! Rock beats Scissors';
   
        computerWin += 1
    }
    if (playerSelection === "scissors" && computerSelection==="paper"){
        document.getElementsByClassName("round-winner")[0].innerHTML = 'You Win! Scissors beats Paper';
        playerWin +=1
   
    }

    if(roundCount>=5){
    rock.setAttribute('disabled','')
    paper.setAttribute('disabled','')
    scissors.setAttribute('disabled','')

        winner()
    }

}


let playerSelection =""
const rock = document.querySelector('#btn-rock')
rock.addEventListener('click',()=>{
     playerSelection = "rock"
  game()
})

const paper = document.querySelector('#btn-paper')
paper.addEventListener('click',()=>{
     playerSelection = "paper"
  game()
})

const scissors = document.querySelector('#btn-scissors')
scissors.addEventListener('click',()=>{
   playerSelection = "scissors"
  game()

})
//5 rounds counter
let roundCount = 0;

const game=()=>{
    roundCount+=1;

  if (roundCount<=5){
    const playerSelected = playerSelection
    const computerSelection = getComputerChoice();
    playRound(playerSelected, computerSelection)
console.log(roundCount)
  }
}
//play start restart
const startRestart = document.querySelector('#start-restart')
startRestart.textContent="Start Game"

startRestart.addEventListener('click',()=>{
    rock.removeAttribute('disabled')
    paper.removeAttribute('disabled')
    scissors.removeAttribute('disabled')
    playRoundCount(roundCount)

})

const playRoundCount=(roundCounter)=>{
    if (roundCounter>=5){
        document.getElementsByClassName("round-winner")[0].innerHTML = ""
        document.getElementsByClassName("game-winner")[0].innerHTML = ""
        rock.removeAttribute('disabled')
        paper.removeAttribute('disabled')
        scissors.removeAttribute('disabled')
        roundCount=0;
        
    }

    if(roundCounter<=5){
        startRestart.textContent="Game in progress"
    }
}
//check winner
const winner = ()=>{

    if(playerWin>computerWin){
        document.getElementsByClassName("game-winner")[0].innerHTML = 'You beat the computer';
    } 

    if(computerWin>playerWin){
        document.getElementsByClassName("game-winner")[0].innerHTML = 'The computer beat you';
    } 

    if(computerWin===playerWin){
        document.getElementsByClassName("game-winner")[0].innerHTML = 'Draw';
    } 

    console.log("computer:",computerWin,"player:",playerWin,"draw:",drawCount)
    drawCount=0
    playerWin= 0
   computerWin=0

    startRestart.textContent="Restart Game"
}
//quit game
const quitGame = document.querySelector('#quit-game')

quitGame.addEventListener('click',()=>{
    clearGame()

})


const clearGame=()=>{
    startRestart.textContent="Start Game"
    drawCount=0
    playerWin= 0
   computerWin=0
   roundCount=0;
   document.getElementsByClassName("round-winner")[0].innerHTML = '';
   document.getElementsByClassName("game-winner")[0].innerHTML = '';
   rock.setAttribute('disabled','')
   paper.setAttribute('disabled','')
   scissors.setAttribute('disabled','')
}