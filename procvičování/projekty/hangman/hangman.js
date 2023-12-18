// volíme části HTML
const nadpis = document.querySelector("#nadpis"),
    text = document.querySelector("#text"),
    tlacitko = document.querySelector("#tlacitko"),
    input = document.querySelector("#input"),
    pokusy = document.querySelector("#pokusy"),
    obr1 = document.querySelector("#sib1"),
    obr2 = document.querySelector("#sib2"),
    obr3 = document.querySelector("#sib3"),
    obr4 = document.querySelector("#sib4"),
    obr5 = document.querySelector("#sib5")

// vytváříme seznam slov
const seznamSlov = ["hokus", "pokus", "letadlo", "antarktida", "nic"]

// ze seznamu slov vybíráme náhodné slovo (přes jeho index)
let hadaneSlovo = seznamSlov[Math.floor(Math.random() * seznamSlov.length)]

// pro kontrolu vybrané slovo vypíšeme do konzole
console.log(hadaneSlovo)

// vytvoříme array odpověď
let odpoved = []

// za každé písmeno z vybraného slova, doplní do odpovědi podtržítko
for (let i = 0; i < hadaneSlovo.length; i++) {
    odpoved[i] = "_"
}

// každé písmeno z odpovědi (momentálně samá podtržítka) vypíše do HTML
for (let i = 0; i < odpoved.length; i++) {
    text.innerText += odpoved[i]
}

let pocetPokusu = 0
let uhodnuto = false

// tlačítku přidáme interakci
tlacitko.addEventListener("click", hadani)

function hadani() {
    uhodnuto = false
    // přijmeme input z HTML a přiřadíme ho proměnné pismeno
    let pismeno = input.value
    input.value = ""

    // porovnáváme každé písmeno z hádaného slova s písmenem, které uživatel tipoval
    // pokud se rovnají, dosadáme písmeno do odpovědi
    for (let i = 0; i < hadaneSlovo.length; i++) {
        if (pismeno === hadaneSlovo[i]) {
            odpoved[i] = pismeno
            uhodnuto = true
        }
    }

    if (uhodnuto === false) {
        pocetPokusu++
        pokusy.innerText = pocetPokusu

        if (pocetPokusu === 1) {
            obr1.style.display = "block"
        } else if (pocetPokusu === 2) {
            obr1.style.display = "none"
            obr2.style.display = "block"
        } else if (pocetPokusu === 3) {
            obr2.style.display = "none"
            obr3.style.display = "block"
        } else if (pocetPokusu === 4) {
            obr3.style.display = "none"
            obr4.style.display = "block"
        } else if (pocetPokusu === 5) {
            obr4.style.display = "none"
            obr5.style.display = "block"
        }
    }

    text.innerText = ""
    // každé písmeno z odpovědi vypíše do HTML
    for (let i = 0; i < odpoved.length; i++) {
        text.innerText += odpoved[i]
    }
}
