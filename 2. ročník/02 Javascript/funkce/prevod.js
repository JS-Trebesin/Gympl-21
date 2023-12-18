const result = document.querySelector("#result"),
    button = document.querySelector("#button"),
    inputCF = document.querySelector("#inputCF"),
    inputValue = document.querySelector("#inputValue")

button.addEventListener("click", prevod)

function prevod() {
    let inputValueAsNo = parseInt(inputValue.value)
    if (inputCF.value === "C") {
        result.innerText = CelToF(inputValueAsNo)
    } else if (inputCF.value === "F") {
        result.innerText = FToCel(inputValueAsNo)
    } else {
        result.innerText = "Chybný údaj"
    }
}

function CelToF(c) {
    let f = c * 1.8 + 32
    return f
}

function FToCel(f) {
    let c = f * -32 * 0.5556
    return c
}
