const redBlock = document.querySelector(".block--red");
const greenBlock = document.querySelector(".block--green");
const blueBlock = document.querySelector(".block--blue");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");
redBlock.setAttribute("position", "absolute");

redBlock.addEventListener("click", redMoveToTop);

redBlock.addEventListener("mousedown", redMoveRight);
greenBlock.addEventListener("click", greenMoveToTop);
blueBlock.addEventListener("click", blueMoveToTop);
pinkBlock.addEventListener("click", pinkMoveToTop);
grayBlock.addEventListener("click", grayMoveToTop);

function redMoveToTop(event) {
  event.target.classList.add("send-to-top");
  event.target.classList.remove("send-down");
  greenBlock.classList.add("send-down");
  blueBlock.classList.add("send-down");
  pinkBlock.classList.add("send-down");
  grayBlock.classList.add("send-down");
}

function greenMoveToTop(event) {
  event.target.classList.add("send-to-top");
  event.target.classList.remove("send-down");
  redBlock.classList.add("send-down");
  blueBlock.classList.add("send-down");
  pinkBlock.classList.add("send-down");
  grayBlock.classList.add("send-down");
}

function blueMoveToTop(event) {
  event.target.classList.add("send-to-top");
  event.target.classList.remove("send-down");
  redBlock.classList.add("send-down");
  greenBlock.classList.add("send-down");
  pinkBlock.classList.add("send-down");
  grayBlock.classList.add("send-down");
}

function pinkMoveToTop(event) {
  event.target.classList.add("send-to-top");
  event.target.classList.remove("send-down");
  redBlock.classList.add("send-down");
  blueBlock.classList.add("send-down");
  greenBlock.classList.add("send-down");
  grayBlock.classList.add("send-down");
}

function grayMoveToTop(event) {
  event.target.classList.add("send-to-top");
  event.target.classList.remove("send-down");
  redBlock.classList.add("send-down");
  blueBlock.classList.add("send-down");
  pinkBlock.classList.add("send-down");
  greenBlock.classList.add("send-down");
}

function redMoveRight(event) {
  redBlock.position = "200px";
}
