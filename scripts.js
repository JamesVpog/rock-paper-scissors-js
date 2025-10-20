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
function playGame(rounds, h, c) {

	for (let i = 0; i < rounds; i++) {
		let c_choice = getComputerChoice();
		let h_choice = getHumanChoice();
		({ humanScore: h, computerScore: c } = playRound(h_choice, c_choice, c, h));
		console.log("Current scores\n: human: " + h + " computer: " + c);
	}
	if (h > c) {
		return "Human is winner";
	} else if (c > h) {
		return "Computer is winner";
	} else {
		return "Tie";
	}
}
console.log(playGame(5, 0, 0));
