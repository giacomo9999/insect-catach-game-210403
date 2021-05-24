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

start_btn.addEventListener("click", () => screens[0].classList.add("up"));

choose_insect_btns.forEach((button) =>
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  })
);

const createInsect = () => {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`;
  insect.addEventListener("click", catchInsect);
  game_container.appendChild(insect);
};

// function createInsect() {
//   const insect = document.createElement("div");
//   insect.classList.add("insect");
//   const { x, y } = getRandomLocation();
//   insect.style.top = `${y}px`;
//   insect.style.left = `${x}px`;
//   insect.innerHTML = `<img src="${selected_insect.src}" alt="${
//     selected_insect.alt
//   }" style="transform: rotate(${Math.random() * 360}deg)" />`;

//   insect.addEventListener("click", catchInsect);

//   game_container.appendChild(insect);
// }

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const startGame = () => {
  setInterval(increaseTime, 1000);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

function catchInsect() {
  console.log("Catching this...", this.innerHTML);
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

const addInsects = () => {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
};

const increaseScore = () => {
  score++;
  if (score > 19) {
    messageEl.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
};
