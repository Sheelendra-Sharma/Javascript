let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if(turnO){ //player O turn
            box.innerText = "O";
            turnO = false;
        } else { //player X turn
            box.innerText = "X";
            // box.style.color = 'red';
            turnO = true;
        }

        box.disabled = true; // to prevent overwrite
        checkwinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true ;
    }
}

const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false ;
        box.innerText = "";
    }
}

const printWinner = (winner) => {
    msg.innerText = `Congralutions Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkwinner = () => {
    for(let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val);
                printWinner(pos1Val);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);