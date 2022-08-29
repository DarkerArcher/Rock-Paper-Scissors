var userScore = 0;
var computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
    document.querySelector(".score").classList.add("green-glow");
    setTimeout(function() { document.querySelector(".score").classList.remove("green-glow") }, 500)
}

function lose(user, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. Too bad.`;
    document.querySelector(".score").classList.add("red-glow");
    setTimeout(function() { document.querySelector(".score").classList.remove("red-glow") }, 500)
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    resultDiv.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. Tie game.`;
    document.querySelector(".score").classList.add("grey-glow");
    setTimeout(function() { document.querySelector(".score").classList.remove("grey-glow") }, 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice); 
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main() {
    rockDiv.addEventListener('click', () => game("r"));
    paperDiv.addEventListener('click', () => game("p"));
    scissorsDiv.addEventListener('click', () => game("s"));
}

main();