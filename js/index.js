// Your code goes here
const navLinks = document.querySelectorAll("nav a");
const dangerBtn = Array.from(document.getElementsByClassName("dontPressBtn"));
const container = Array.from(document.querySelectorAll(".container"));
const header = document.querySelector(".main-navigation");
const footer = document.querySelector(".footer");
const body = document.body;
const destination = document.querySelectorAll(".destination");
const images = document.querySelectorAll("img");
const h2 = document.querySelectorAll("h2");

const dangerMessage = document.createElement("div");
dangerMessage.style.width = "100vw";
dangerMessage.style.height = "100vh";
dangerMessage.style.fontSize = "15rem";
dangerMessage.style.fontWeight = "bold";
dangerMessage.style.textAlign = "center";
dangerMessage.style.marginTop = "200px";
dangerMessage.innerHTML = "Deleting contents of harddrive...";

navLinks.forEach(el => {
  el.addEventListener("mouseenter", navLinksHover);
  el.addEventListener("mouseleave", navLinksNoHover);
});

function navLinksHover(event) {
  event.target.style.color = "steelblue";
  event.target.style.fontSize = "2.5rem";
  event.target.style.fontWeight = "bold";
}

function navLinksNoHover(event) {
  event.target.style.color = "black";
  event.target.style.fontSize = "1.6rem";
  event.target.style.fontWeight = "normal";
}

dangerBtn[0].addEventListener("click", event => {
  body.appendChild(dangerMessage);
  body.style.backgroundColor = "red";
  body.style.color = "black";
  container[0].style.display = "none";
  container[1].style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
});

destination.forEach(ele => {
  ele.addEventListener("mouseenter", destinationHover);
  ele.addEventListener("mouseleave", destinationNoHover);
});

function destinationHover(event) {
  event.target.style.backgroundColor = "yellow";
  event.target.style.padding = "2%";
}

function destinationNoHover(event) {
  event.target.style.backgroundColor = "white";
  event.target.style.padding = "0";
}

images.forEach(ele => {
  ele.addEventListener("mouseenter", imageBig);
  ele.addEventListener("mouseleave", imageSmall);
});

function imageBig(event) {
  event.target.style.transform = "scale(1.2)";
}

function imageSmall(event) {
  event.target.style.transform = "scale(1)";
}

h2.forEach(ele => {
  ele.addEventListener("dblclick", h2DblClick);
});

function h2DblClick(event) {
  event.target.classList.toggle("transform");
}

body.addEventListener("mousedown", mouseMoveFunction);

function mouseMoveFunction(event) {
  event.stopPropagation();
  event.target.classList.toggle("bodyClass");
}
