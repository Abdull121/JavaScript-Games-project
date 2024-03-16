let box = document.querySelectorAll(".box");
let reset = document.querySelector("#resetBtn");
let heading = document.querySelector(".main-heading");
let gameBox = document.querySelector(".game");
let winnerBtn = document.querySelector("#winner");
winnerBtn.style.display = "none";
let startNewGame = document.querySelector("#newgame");
startNewGame.style.display = "none";

let draw = true;
let count = 0; // track the boxes

let turnO = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
];
box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    count++;

    if (turnO) {
      boxes.innerText = "O";
      boxes.style.color = "#E25041";
      turnO = false;
    } else {
      boxes.innerText = "X";
      boxes.style.color = "#1CBD9E";
      turnO = true;
    }
    boxes.disabled = true;
    winnerCheck();
  });
});

// winner
let displayWinner = (winner) => {
  winnerBtn.innerText = `player ${winner} is winner!`;
};
// resetGame
let resetGame = () => {
  count = 0;
  draw = true;
  for (let boxReset of box) {
    boxReset.style.display = "block";
    boxReset.innerText = "";
    boxReset.disabled = false;
  }
  startNewGame.style.display = "none";
  winnerBtn.style.display = "none";
  gameBox.style.display = "flex";
  heading.style.display = "block";
  reset.style.display = "block";

  for (let p of winPattern) {
    box[p[0]].classList.remove("popup");
    box[p[1]].classList.remove("popup");
    box[p[2]].classList.remove("popup");

  }
};
reset.addEventListener("click", resetGame);

startNewGame.addEventListener("click", resetGame);

// hideGame

let hideGame = () => {
  for (let boxElement of box) {
    boxElement.style.display = "none";
  }
  heading.style.display = "none";
  reset.style.display = "none";
  gameBox.style.display = "none";
  winnerBtn.style.display = "block";
  startNewGame.style.display = "block";
};

// disable-box
let disableBox = () => {
  for (let dbox of box) {
    dbox.disabled = true;
  }
};

let winnerCheck = () => {
  // Assume it's a draw until proven otherwise

  for (let pattern of winPattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        box[pattern[0]].style.color = "#FFBC2C";
        box[pattern[1]].style.color = "#FFBC2C";
        box[pattern[2]].style.color = "#FFBC2C";
        box[pattern[0]].classList.add("popup");
        box[pattern[1]].classList.add("popup");
        box[pattern[2]].classList.add("popup");


        disableBox();
        setTimeout(hideGame, 1800);
        displayWinner(pos1);
        draw = false;
      
      }
    }
  }

  drawCheck(draw);
};

// check for draw

let drawCheck = (draw) => {
  if (draw) {
    let isDraw = true;
    if (count != 9) {
      isDraw = false;
    }

    if (isDraw) {
      setTimeout(() => {
        hideGame();
        winnerBtn.style.display = "block";
        winnerBtn.innerText = "Draw!";
      }, 1000);
    }
  }
};
