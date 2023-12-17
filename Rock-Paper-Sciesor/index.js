let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const getcompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const showWinnner = (userWin, userChoice, compChoice) => {
    if (userWin === false) {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You Lose! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    } else {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
};

const playGame = (userChoice) => {
    const compChoice = getcompChoice();
    console.log("USer Choice = ", userChoice);
    console.log("Computer Choice = ", compChoice);
    if (userChoice === compChoice) {
      console.log("Game Draw");
      msg.innerText = "Game Draw!";
      msg.style.backgroundColor = "Darkblue";
    } else {
      let userWin = true;
      if (userChoice == "rock") {
        // compChoice == paper || scissors
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        // compChoice == rock || scissors
        userWin = compChoice === "rock" ? true : false;
      } else {
        // compChoice == rock || paper...
        userWin = compChoice === "rock" ? false : true;
      }
      showWinnner(userWin,userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // console.log("Choice was clicked",userChoice);
    });
});
