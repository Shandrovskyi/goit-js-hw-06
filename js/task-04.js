const counterValueID = document.getElementById("value");

const increaceBtn = document.querySelector("[data-action = 'decrement']");
const decreaceBtn = document.querySelector("[data-action = 'increment']");


let counterValue = 0;

increaceBtn.addEventListener("click", () => {
    counterValue -=  1 
    counterValueID.textContent = counterValue;

});

decreaceBtn.addEventListener("click", () => {
    counterValue +=  1 
    counterValueID.textContent = counterValue;

});