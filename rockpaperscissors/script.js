function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (userOption === computerResult) {
    return "Its a tie! Both chose " + userOption;
  } else if (hasPlayerWonTheRound) {
    playerScore++;
    return "Player wins! " + userOption + " beats " + computerResult;
  } else {
    computerScore++;
    return "Computer Wins! " + computerResult + " beats " + userOption;
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
