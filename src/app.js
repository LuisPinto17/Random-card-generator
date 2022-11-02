/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  cardGenerator();
};

let suits = {
  suit: ["♦", "♥", "♠", "♣"],
  value: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};

function cardGenerator() {
  let selectorValue = Math.floor(Math.random() * suits.value.length); //contiene un numero
  //ubica el elemento con el selector value
  let selectorSuit = Math.floor(Math.random() * suits.suit.length);
  if (selectorSuit == 0 || selectorSuit == 1) {
    document.querySelector("#valueNumber").classList.add("textRed");
    document.querySelector(".card-suit").classList.add("textRed");
    document.querySelector(".card-suit-down").classList.add("textRed");
  }
  document.querySelector("#valueNumber").innerHTML = suits.value[selectorValue];
  document.querySelector(".card-suit").innerHTML = suits.suit[selectorSuit];
  document.querySelector(".card-suit-down").innerHTML =
    suits.suit[selectorSuit];
}

/*
  const randomTitle = () => {
  let titles = ["♦", "♥", "♠", "♣"];
  return titles[Math.floor(Math.random() * titles.length)];
};

const changeTitle = h1 => {
  let newTitle = randomTitle();
  while (newTitle == h1.innerHTML) {
    newTitle = randomTitle();
  }
  return newTitle;
};

window.onload = function() {
  //write your code here
  let titles = document.querySelectorAll(".title");
  let h1;
  let randomTitleText = randomTitle();
  for (let title of titles) {
    h1 = document.createElement("h1");
    h1.innerHTML = randomTitleText;
    title.innerHTML = "";
    title.appendChild(h1);
  }

  let footer = document.getElementById("footer");
  footer.innerHTML = "";
  let button = document.createElement("button");
  button.innerHTML = "Cambia de título";
  footer.appendChild(button);

  // let interval = setInterval(() => {
  //   let newTitle = changeTitle(h1);
  //   h1.innerHTML = newTitle;
  // }, 1000);

  // button.addEventListener("click", () => {
  //   let newTitle = changeTitle(h1);
  //   h1.innerHTML = newTitle;
  //   clearInterval(interval);
  //   interval = setInterval(() => {
  //     let newTitle = changeTitle(h1);
  //     h1.innerHTML = newTitle;
  //   }, 1000);
  // });
}; */
