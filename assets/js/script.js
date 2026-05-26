//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {


    //Get the button elemsnts and even listeners to them    
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type").toLowerCase();

                runGame(gameType);
            }
            //let gameType = this.getAttribute("data-type");
            //alert(`You clicked ${gameType}!`);

        });
    }
    runGame("addition");
});
/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //create two ramdon numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    //for addition button been clicked
    if (gameType === "addition") {
        displayAdditonQuestion(num1, num2);
    }else if (gameType === "subtract") {
        displaySubstractQuestion(num1, num2);
    }else {
        alert(`unkown game type:${gameType}`);
        throw ` unkown game type:${gameType}. Aborting `;
    }
}
/**
 * Checks the answer agaist the first elemet in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey,you got it right!:D");
        incrementScore();
    } else {
        alert(`Awwwwwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWongAnswer();
    }

}
/**
 * Gets the operands(the numbers) and the operator(plus,minus etc.)
 * directly from the DOM,and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    //Caculate addition
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "ssubtract"];
    }
    else {
        alert(`unkown game type:${gameType}`);
        throw ` unkown game type:${gameType}. Aborting `;
    }

}

function incrementScore() {
    let oldScore = document.getElementById("score").textContent;
    document.getElementById("score").textContent = ++oldScore;

}

function incrementWongAnswer() {
    let oldScore = document.getElementById("incorrect").textContent;
    document.getElementById("incorrect").textContent = --oldScore;
}

function displayAdditonQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubstractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

}

function displayMutiplyQuestion() {

}

function displayDiviteQuestion() {

}

