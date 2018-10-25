// add event listener for andy and bobby image
document.querySelector("#andyImg").addEventListener("click", onClickAndy);
document.querySelector("#bobbyImg").addEventListener("click", onClickBobby);
// Declare variables for andy and bobby
let counterAndy = 0;
let counterBobby = 0;

// Select counter element for andy and bobby
const counterEleAndy = document.querySelector("#andyCounter");
const counterEleBobby = document.querySelector("#bobbyCounter");

counterEleAndy.textContent = counterAndy;
counterEleBobby.textContent = counterBobby;

function onClickAndy() {
    counterAndy++;
    counterEleAndy.textContent = counterAndy;
}

function onClickBobby() {
    counterBobby++;
    counterEleBobby.textContent = counterBobby;
}
