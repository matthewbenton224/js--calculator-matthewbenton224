const calculator = document.querySelector(".calculator-container")

calculator.addEventListener("click", function(event) {
    console.log(event)
    console.log(event.target)
    console.log(event.target.innerText)
    const display = document.querySelector("#output")
    display.innerHTML=event.target.innerText
})

document.querySelector(".clear").addEventListener("click", function(event) {
    const display = document.querySelector("#output")
    innerHTML=""
    display.innerHTML=event.target.innerText

})