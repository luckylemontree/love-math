//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {


    //Get the button elemsnts and even listeners to them    
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
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
       displayAdditonQuestion(num1, num1);
    } else {
        alert(`unkown game type:${gameType}`);
        throw ` unkown game type:${gameType}. Aborting `;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWongAnswer() {

}

function displayAdditonQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubstractQuestion() {

}

function displayMutiplyQuestion() {

}

function displayDiviteQuestion() {

}

