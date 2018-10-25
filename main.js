document.querySelector("#cat").addEventListener("click", onClick);

let counter = 0;

const counterEle = document.querySelector("#counter");

counterEle.textContent = counter;

function onClick() {
    counter++;
    counterEle.textContent = counter;
}
