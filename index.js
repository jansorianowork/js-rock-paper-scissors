console.log("hello, world!")

const getComputerChoice =()=>{
    const compOptions = ['rock','paper','scissors']

    const randomizeOption = Math.floor(Math.random() * compOptions.length)

   const randomRes = compOptions[randomizeOption]

   return randomRes
}


const playRound=(playerSection, computerSelection)=>{

    playerSection = playerSection.toLowerCase()
    //rock
    if (playerSection === "rock" && computerSelection==="rock"){
        console.log('draw')
    }
    if (playerSection === "rock" && computerSelection==="paper"){
        console.log("You Lose! Paper beats Rock")
    }
    if (playerSection === "rock" && computerSelection==="scissors"){
        console.log("You Win! Scissors beats Rock")
    }

    //paper
    if (playerSection === "paper" && computerSelection==="paper"){
        console.log('draw')
    }
    if (playerSection === "paper" && computerSelection==="rock"){
        console.log("You Win! Paper beats Rock")
    }
    if (playerSection === "paper" && computerSelection==="scissors"){
        console.log("You Lose! Scissors beats Paper")
    }

    //scissors
    if (playerSection === "scissors" && computerSelection==="scissors"){
        console.log('draw')
    }
    if (playerSection === "scissors" && computerSelection==="rock"){
        console.log("You Lose! Rock beats Scissors")
    }
    if (playerSection === "scissors" && computerSelection==="paper"){
        console.log("You Win! Scissors beats Paper")
    }
}


// console.log(playerSelection)
// console.log(computerSelection)


const game=()=>{
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("your move (rock, paper, scissors)");
const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
   
     }

     console.log(playRound(playerSelection, computerSelection));
}
game()