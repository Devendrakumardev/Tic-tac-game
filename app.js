

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let mgsContainer = document.querySelector(".mgs-container");
let msg = document.querySelector("#mgs");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    mgsContainer.classList.add("hide");
};
 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.diabled = true;

        checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.enabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `congratulation, Winner is ${winner}`;
    mgsContainer.classList.remove("hide");
    disableBoxes();
};


const checkwinner = () => {
    for (let patten of winPatterns) {


        let pos1Val = boxes[patten[0]].innerText;
        let pos2Val = boxes[patten[1]].innerText;
        let pos3Val = boxes[patten[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val)
                showwinner(pos1Val);
            }
        }

    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn .addEventListener("click" , resetGame);