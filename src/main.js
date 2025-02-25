
const choices=["rock","paper","scissors"]
const playerScore = document.getElementById("playerScore");
const computerScore =document.getElementById("computerScore");
const scoreDisplay =document.getElementById("scoreDisplay");
const computerIcon =document.getElementById("computerIcon");
const playerIcon =document.getElementById("playerIcon");

let playerScoreCount =0;
let computerScoreCount=0;

document.addEventListener("DOMContentLoaded",() =>{
  document.getElementById("rockbtn").addEventListener("click",() => playGame("rock"));
  document.getElementById("paperbtn").addEventListener("click",() => playGame("paper"));
  document.getElementById("scissorsbtn").addEventListener("click",() => playGame("scissors"));
});


function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random()*3)]
  let result = ""
  if ( playerChoice === computerChoice){
    result="Currently Draw";
    
  }

  else{
    switch(playerChoice){
      case "rock":
        if(computerChoice === 'scissors'){
          result="Player Wins"
          playerScoreCount++;
          playerScore.textContent=playerScoreCount;
        } else{
          result="Computer Wins"
          computerScoreCount++;
          computerScore.textContent=computerScoreCount;
        }
        break;
      case "paper":
         if(computerChoice === "rock"){
          result="Player Wins";
          playerScoreCount++;
          playerScore.textContent=playerScoreCount;
         }else{
          result="Computer Wins";
         }

         break;

         case "scissors":
          if(computerChoice === "paper"){
            result="Player Wins";
            playerScoreCount++;
          playerScore.textContent=playerScoreCount;
          }else{
            result="Computer Wins";
            computerScoreCount++;
          computerScore.textContent=computerScoreCount;
          }
          break;
    }
  }
  

 const iconShow={
  rock: "✊",
  paper: "✋",
  scissors:"✌️",
 }
 computerIcon.innerHTML=iconShow[computerChoice];
 playerIcon.innerHTML =iconShow[playerChoice];
 scoreDisplay.textContent=result;
  
}







// let userChoice

// possibleChoices.forEach(possibleChoice=>document.addEventListener('click',(e)=>{userChoice=e.target.id 
//   user
// userChoiceDisplay.innerHTML=UserChoice
// generateComputerChoice()
// }))
// fuction generateComputerChoice(){
//   const randomNumber= math.floor(math.random()*3
// }

