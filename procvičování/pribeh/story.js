const input = document.querySelector("#input"),
    textMain = document.querySelector("#text"),
    textOutput = document.querySelector("#text-output"),
    button = document.querySelector("#butt")

button.addEventListener("click", revealStory)

let state = "school"

let school = ""
let className = ""
let student = ""

function revealStory() {
    if (state === "school") {
        school = input.value
        state = "class"
        textMain.innerText = "Zadej jméno třídy"
        input.value = ""
    } else if (state === "class") {
        className = input.value
        state = "student"
        textMain.innerText = "Zadej jméno studenta/ky"
        input.value = ""
    } else if (state === "student") {
        student = input.value
        input.value = ""
        textOutput.innerText =
            "Nejlepší škola je " +
            school +
            ". Nejlepší třída je " +
            className +
            ". Nejlepší student(ka) z " +
            className +
            " je " +
            student
    }
}
