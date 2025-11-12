
let choices = document.querySelectorAll(".choices");
let output = document.querySelector("#Msg");
let compScore = 0;
let userScore = 0;

let compS = document.querySelector("#CompScore");
let userS = document.querySelector("#YourScore");

//////////////////////////////////////////////////
//
// Function Name: newGame
// Description : start new game
// Output: 
// Date: 06/11/2025
// Author: Nikita Rane
//
//////////////////////////////////////////////////

let newGame = () => {
    output.innerText = "Play Now";
    output.style.backgroundColor = "black";
    userScore=0;
    compScore=0;
    userS.innerText = userScore;
    compS.innerText = compScore;
}

//////////////////////////////////////////////////
//
// Function Name: getCompChoice
// Description : retrieve computer random choice
// Output: string
// Date: 18/09/2025
// Author: Nikita Rane
//
//////////////////////////////////////////////////


let getCompChoice = () => {
    const compChoices = ["Rock", "Paper", "Scissor"];
    let comp = compChoices[Math.floor(Math.random() * 3)];
    return comp;
}


//////////////////////////////////////////////////
//
// Function Name: draw
// Description : display message
// Date: 18/09/2025
// Author: Nikita Rane
//
//////////////////////////////////////////////////

let draw = () => {
    output.innerText = "Game draw. Play again...";
    output.style.backgroundColor = "black";
}


//////////////////////////////////////////////////
//
// Function Name: ShowWinner
// Description : display winner and update score board.
// Input: boolean, string, string
// Date: 18/09/2025
// Author: Nikita Rane
//
//////////////////////////////////////////////////

let ShowWinner = (userWin, user, computer) => {


    if (userWin) {
        userScore++;
        userS.innerText = userScore;
        output.innerText = `You win. Your ${user} beats ${computer}`;
        output.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compS.innerText = compScore;
        output.innerText = `You lose.  ${computer} beats your ${user}`;
        output.style.backgroundColor = "red";
    }
}


//////////////////////////////////////////////////
//
// Function Name: playGame
// Description : if both choices match then game draw, else choice return
// Input: string, string
// Date: 18/09/2025
// Author: Nikita Rane
//
//////////////////////////////////////////////////

let playGame = (user, computer) => {

    if (user === computer) {
        draw();
    }
    else {
        let userWin = true;
        if (user === "Rock") {
            /*if(computer === "Paper")
            {
                msg=`Computer win. ${computer} covers ${user}`;
            }
            else if(computer === "Scissor")
            {
                msg=`You win. ${user} beats ${computer}`;
            }*/

            userWin = (computer === "Paper") ? false : true;
        }
        else if (user === "Paper") {
            /*if(computer === "Rock")
            {
                msg=`You win. ${user} covers ${computer}`;
            }
            else if(computer === "Scissor")
            {
                msg=`Computer win. ${computer} cuts ${user}`;
            }*/
            userWin = (computer === "Rock") ? true : false;
        }
        else if (user === "Scissor") {
            /*if(computer === "Rock")
            {
                msg=`Computer win. ${computer} beats ${user}`;
            }
            else if(computer === "Paper")
            {
                msg=`You win. ${user} cuts ${computer}`;
            }*/

            userWin = (computer === "Rock") ? false : true;

        }
        ShowWinner(userWin, user, computer);
    }

}


let main = () => {

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {

            let userChoice = choice.getAttribute("id");
            //console.log("user clicked: ", userChoice);
            let compChoice = getCompChoice();
            //console.log("comp clicked: ", compChoice);

            playGame(userChoice, compChoice);

        })
    })
}

main();