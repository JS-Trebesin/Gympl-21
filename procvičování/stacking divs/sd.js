const wrapper = document.querySelector(".wrapper")

for (let i = 0; i < 6; i++) {

    //document.createElement("název prvku")
    let novyDiv = document.createElement("div")

    // přidání classy square novému prvku
    novyDiv.classList.add("square")

    // do divu wrapper přidá nově vytvořený prvek
    wrapper.appendChild(novyDiv)
}


