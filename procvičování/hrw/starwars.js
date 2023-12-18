const input = document.querySelector("#inpt"),
    out = document.querySelector("#out"),
    tlacitko = document.querySelector("#tlacitko"),
    nadpis = document.querySelector("#tlacitko"),
    starWars = ["Luke", "Leia", "Yoda", "Ewok číslo jedna, zvaný Fluffy"]

tlacitko.addEventListener("click", pridejPostavicku)

function pridejPostavicku() {
    starWars.push(input.value)
    out.innerText = ""
    for (let i = 0; i < starWars.length; i++) {
        if (starWars[i] === "C3PO" || starWars[i] === "C-3PO") {
            out.innerText += "super otravný robot" + "\n"
        } else {
            out.innerText += starWars[i] + "\n"
        }
    }
}
