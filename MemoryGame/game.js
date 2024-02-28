window.onload = () => {
  shuffleCard();
};
let boxes = document.querySelectorAll(".box");
let restCard = document.querySelector(".reset");
const boxLength = 20;
var firstCard;
var secondCard;
var cardFlip = false;

boxes.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  this.classList.add("boxOpen");

  if (!cardFlip) {
    cardFlip = true;
    firstCard = this;
  } else {
    secondCard = this;
    cardFlip = false;
    matchCard();
  }
}
function matchCard() {
  setTimeout(() => {
    if (firstCard.innerText === secondCard.innerText) {
      success();
      // console.log("success")
    } else {
      // console.log("fail")
      fail();
    }
  }, 500);
}
function success() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}
function fail() {
  firstCard.classList.remove("boxOpen");
  secondCard.classList.remove("boxOpen");
}
function shuffleCard() {
  boxes.forEach((card) => {
    let rand = Math.floor(Math.random() * boxLength);
    // console.log(rand)
    card.style.order = rand;
  });
}

restCard.addEventListener("click", reset);

function reset() {
  boxes.forEach((card) => {
    card.classList.remove("boxOpen");
    card.addEventListener("click", flipCard);
  });

  firstCard = null;
  secondCard = null;
  cardFlip = false;
  setTimeout(() => {
    shuffleCard();
  }, 400);
}
