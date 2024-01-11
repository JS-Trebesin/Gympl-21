let tlacitko = document.querySelector("#tlacitko")
let nadpis = document.getElementById("nadpis")
let input = document.querySelector("#input")




tlacitko.addEventListener("click", zmenNadpis)


function zmenNadpis() {
    nadpis.style.color = "red"
    nadpis.innerText = input.value
}   

