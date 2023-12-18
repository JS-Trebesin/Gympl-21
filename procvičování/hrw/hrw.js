let input = document.querySelector("#inpt")
let out = document.querySelector("#out")
let tlacitko = document.querySelector("#tlacitko")
let pc = ["RAM", "CPU", "motherboard"]

tlacitko.addEventListener("click", pridejKomponent)

function pridejKomponent() {
    pc.push(input.value)
    out.innerText = ""
    for (let i = 0; i < pc.length; i++) {
        out.innerText += pc[i] + "\n"
    }
}
