const firefly = document.querySelector(".firefly")

let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX
    mouseY = event.clientY

    litejSvetlusko()

})

window.addEventListener("scroll", function() {
    litejSvetlusko()
})


function litejSvetlusko() {
    let scrollX = window.pageXOffset
    let scrollY = window.pageYOffset

    firefly.style.left = mouseX + scrollX + "px"
    firefly.style.top = mouseY + scrollY + "px"

}