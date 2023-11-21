const result = document.querySelector(".result");
const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const rollBtn = document.querySelector(".button");
const revealAnswer = document.querySelector(".button2");
const timerTxt = document.querySelector(".timer");
const dif1 = document.querySelector(".button3");
const dif2 = document.querySelector(".button4");
const dif3 = document.querySelector(".button5");
const currentDif = document.querySelector(".currentDif");
let sec = 0;
let mil = 0;
let min = 1;
let max = 10;
let active = false;

let timer = function () {
  timerTxt.innerHTML = `${sec} s ${mil} ms`;
  mil++;
  if (mil >= 60) {
    mil = 0;
    sec++;
  }
};

let randomNum = function () {
  return Math.floor(Math.random() * (max - min) + min);
};

let updateScreen = function (num1, num2, resultFinal, myInterval) {
  active = true;
  firstNum.textContent = num1;
  secondNum.textContent = num2;
  revealAnswer.addEventListener("click", () => {
    result.textContent = resultFinal;
    clearInterval(myInterval);
    timerTxt.innerHTML = `${sec} s ${mil} ms`;
    active = false;
  });
};

let calculateResult = function (num1, num2) {
  return num1 * num2;
};

let makeOp = function () {
  sec = 0;
  mil = 0;
  result.textContent = "?";
  timerTxt.textContent = `${sec} s ${mil} ms`;
  const num1 = randomNum();
  const num2 = randomNum();
  const resultFinal = calculateResult(num1, num2);
  const myInterval = setInterval(timer, 1);
  if (active) {
    clearInterval(myInterval);
  }
  updateScreen(num1, num2, resultFinal, myInterval);
};

rollBtn.addEventListener("click", () => {
  makeOp();
});

dif1.addEventListener("click", () => {
  min = 1;
  max = 10;
  currentDif.textContent = "Difficulty Level 1 (Min:1 - Max:9)";
});

dif2.addEventListener("click", () => {
  min = 3;
  max = 16;
  currentDif.textContent = "Difficulty Level 2 (Min:3 - Max:15)";
});

dif3.addEventListener("click", () => {
  min = 5;
  max = 21;
  currentDif.textContent = "Difficulty Level 3 (Min:5 - Max:20)";
});
