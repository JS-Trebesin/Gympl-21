let nadpis = document.querySelector("#nadpis")
let input = document.querySelector("#input")
let text = document.querySelector("#text")
let tlacitko = document.querySelector("#tlacitko")
let body = document.querySelector("body")


tlacitko.addEventListener("click", carymaryfuk)


function carymaryfuk() {
    if (input.value === "želva") {
        text.innerText = "I like turtles"
        body.style.backgroundColor = "turquoise"
    } else if (input.value === "liška") {
        text.innerText = "what does the fox say?"
        body.style.backgroundColor = "coral"
    } else if (input.value === "plameňák") {
        text.innerText = "🦩"
        body.style.backgroundColor = "pink"
    } else {
        text.innerText = "Toto zvíře neznám :("
        body.style.color = "white"
        body.style.backgroundColor = "black"
    }
}