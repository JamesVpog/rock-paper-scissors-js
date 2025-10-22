let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
	return parseInt(prompt("Rock (0), Paper (1), or Scissors (2)?"));
}

function playRound(human, computer, computerScore, humanScore) {

	const ul = document.querySelector("ul");
	const li = document.createElement("li");

	if (human == computer) {
		li.textContent = ("Tie!")
	} else if (human == 0 && computer == 1) {
		li.textContent = ("You lose! Paper beats rock");
		computerScore++;
	} else if (human == 0 && computer == 2) {
		li.textContent = ("You win! Rock beats scissors");
		humanScore++;
	} else if (human == 1 && computer == 0) {
		li.textContent = ("You win! Paper beats rock");
		humanScore++;
	} else if (human == 1 && computer == 2) {
		li.textContent = ("You lose! Scissors beats paper");
		computerScore++;
	} else if (human == 2 && computer == 0) {
		li.textContent = ("You lose! Rock beats scissors");
		computerScore++;
	} else if (human == 2 && computer == 1) {
		li.textContent = ("You win! Scissors beats paper");
		humanScore++;
	}
	li.textContent = li.textContent + " Player: " + humanScore + " Computer: " + computerScore;
	ul.appendChild(li);
	return { humanScore, computerScore };
}

function handleClick(e) {
	// use the target id as the player's choice (0 is rock, 1 is paper, 2 is scissors)

	const result = playRound(e.target.id, getComputerChoice(), computerScore, humanScore);
	humanScore = result.humanScore;
	computerScore = result.computerScore
	const btns = document.querySelectorAll("button");

	if (humanScore >= 5 || computerScore >= 5) {
		btns.forEach((btn) => btn.disabled = true);
	}
	if (humanScore >= 5) {
		const p = document.createElement("p");
		const gameDiv = document.querySelector(".game");
		p.textContent = "You win!"
		gameDiv.appendChild(p);

	} else if (computerScore >= 5) {

		const p = document.createElement("p");
		const gameDiv = document.querySelector(".game");
		p.textContent = "You lose!"
		gameDiv.appendChild(p);
	}
}

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
	button.addEventListener("click", handleClick);
})

