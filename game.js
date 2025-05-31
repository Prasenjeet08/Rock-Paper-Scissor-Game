let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");
const mContainer = document.querySelector(".msg-container");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
     msg.innerText = "Game was draw";
    //  mContainer.style.backgroundColor = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win! Computer choice was ${compChoice}`;
        uScore.innerText = userScore +=1;
        // mContainer.style.backgroundColor = "white";
        // mContainer.style.color = "black";
    } else {
         msg.innerText = `You lose! Computer choice was ${compChoice}`;
         cScore.innerText = compScore += 1;
        //  mContainer.style.backgroundColor = "white";
        //  mContainer.style.color = "black";
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});