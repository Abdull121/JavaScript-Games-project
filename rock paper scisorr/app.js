const choices = document.querySelectorAll(".choice");
const userVal = document.querySelector("#user-score");
const compVal = document.querySelector("#comp-score");
const displayResult = document.querySelector("#result");
const userSelection = document.querySelector("#user-select");
const compSelection = document.querySelector("#comp-select");

let userScore = 0;
let CompScore = 0;

choices.forEach((choose) => {
  choose.addEventListener("click", () => {
    const userChoice = choose.getAttribute("id");
    console.log(userChoice)
    userSelection.style.display="block";
    userSelection.innerText=userChoice;
   
    


    playGame(userChoice);
  });
});

//computer generate

let compGen = () => {
  let arr = ["rock", "paper", "scissor"];
  return (comp = arr[Math.floor(Math.random() * 3)]);
};

// display winner

let showWinner = (userWin) => {
  userWin
    ? `${
        (userScore++,
        (userVal.innerText = userScore),
        (displayResult.innerText = "You win!"),
        (displayResult.style.backgroundColor = "green"))
      } `
    : `${
        (CompScore++,
        (compVal.innerText = CompScore),
        (displayResult.innerText = "You loose!"),
        (displayResult.style.backgroundColor = "red"))
      } `;
};

// drawGame
let drawGame = () => {
  displayResult.innerText = "Draw!";
  displayResult.style.backgroundColor = "#7FACFF";
};

// playGame
let playGame = (user) => {
  // computerChoice
  const compChoice = compGen();
  console.log(compChoice)
  compSelection.style.display="block";
  compSelection.innerText = compChoice

  if (user === compChoice) {
    //game draw
    drawGame();
  } else {
    let userWin = true;
    if (user === "rock") {
      //paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (user === "paper") {
      // rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //user choice scissor

      // comp choice rock, paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
};
