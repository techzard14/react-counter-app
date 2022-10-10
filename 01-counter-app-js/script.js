const minusEl = document.querySelector(".decrement");
const plusEl = document.querySelector(".increment");
const countdownEl = document.getElementById("counter");
const resetEl = document.querySelector(".reset")
let number = 0
countdownEl.textContent = number

minusEl.addEventListener("click", ()=>{
    if (number <= 0){
        number = 0
        // countdownEl.textContent = number;
        return
    }
    number--
    
   countdownEl.textContent = number;
})

plusEl.addEventListener("click", ()=>{
    console.log(number);
    countdownEl.textContent = number++;
})

resetEl.addEventListener ("click", ()=>{
    number = 0
})
