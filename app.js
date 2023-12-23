let boxBtn = document.querySelectorAll(".box");
let msg = document.querySelector(".msg-container");
let para = document.querySelector("#msg");
let newBtn = document.querySelector("#btn-new");
let resetBtn = document.querySelector("#btn-reset");

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turnO = true;

let count = 0;
console.log("count", count);
for (let box of boxBtn) {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "";
    } else {
      box.style.color = "blue";
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count = count + 1;
    winsPlayer();
  });
}
const disableBtn = () => {
  for (let box of boxBtn) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of boxBtn) {
    box.disabled = false;
  }
};
const resetBox = () => {
  for (let box of boxBtn) {
    enableBtn();
    box.innerText = "";
    msg.classList.add("hide");
  }
};
const checkPlayer = (position0) => {
  para.innerHTML = `Congratulations Winner is ${position0}`;
  msg.classList.remove("hide");
  disableBtn();
  count = 0;
};

const drawPlayer = (position0, position1) => {
  if (count === 9) {
    para.innerHTML = `${position0} ${position1} DRAW!!`;
    msg.classList.remove("hide");
    disableBtn();
  }
};

const winsPlayer = () => {
  for (let pattern of winPatterns) {
    let position0 = boxBtn[pattern[0]].innerText;
    let position1 = boxBtn[pattern[1]].innerText;
    let position2 = boxBtn[pattern[2]].innerText;
    if (position0 !== "" && position1 !== "" && position2 !== "") {
      if (position0 === position1 && position1 === position2) {
        checkPlayer(position0);
      } else {
        drawPlayer(position0, position1);
      }
    }
  }
};
newBtn.addEventListener("click", resetBox);
resetBtn.addEventListener("click", resetBox);
