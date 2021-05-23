const screens = document.querySelectorAll(".screen");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.querySelector(".game-container");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");
const messageEl = document.querySelector(".message");

let seconds = 0;
let score = 0;
let selected_insect = {};

console.log("JS here...pre-addEL", screens[0].classList);

start_btn.addEventListener("click", () => screens[0].classList.add("up"));
console.log("JS here...postEL", screens[0].classList);
