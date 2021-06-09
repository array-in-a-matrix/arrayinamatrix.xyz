let userChoice = ""

const getUserChoice = (userInput) => {
    userChoice = userInput
};

function getComputerChoice() {
  let cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice === 0) {
    return "rock";
  } else if (cpuChoice === 1) {
    return "paper";
  } else if (cpuChoice === 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie game!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "You won with cheats!";
  }
}

function playGame() {
  var computerChoice = getComputerChoice();
  console.log("Player: " + userChoice);
  console.log("CPU: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

  var div = document.getElementById('score')
  var p = document.getElementById("text");
  var strong = document.getElementById("winner");

  p.textContent = `You:     ${userChoice}`
  p.textContent += ` CPU:    ${computerChoice}`
  strong.textContent = determineWinner(userChoice, computerChoice);     
  document.getElementById("game").appendChild(div).appendChild(p)
  document.getElementById("game").appendChild(div).appendChild(strong)
}

function play(input){
    getUserChoice(input)
    playGame()
}
