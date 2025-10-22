let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
	return parseInt(prompt("Rock (0), Paper (1), or Scissors (2)?"));
}

function playRound(human, computer, computerScore, humanScore) {
	if (human == computer) {
		console.log("Tie!")
	} else if (human == 0 && computer == 1) {
		console.log("You lose! Paper beats rock");
		computerScore++;
	} else if (human == 0 && computer == 2) {
		console.log("You win! Rock beats scissors");
		humanScore++;
	} else if (human == 1 && computer == 0) {
		console.log("You win! Paper beats rock");
		humanScore++;
	} else if (human == 1 && computer == 2) {
		console.log("You lose! Scissors beats paper");
		computerScore++;
	} else if (human == 2 && computer == 0) {
		console.log("You lose! Rock beats scissors");
		computerScore++;
	} else if (human == 2 && computer == 1) {
		console.log("You win. Scissors beats paper");
		humanScore++;
	}
	return { humanScore, computerScore };
}

function handleClick(e) {
	// use the target id as the player's choice (0 is rock, 1 is paper, 2 is scissors)
	playRound(e.target.id, getComputerChoice(), computerScore, humanScore);
}

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
	button.addEventListener("click", handleClick);
})

