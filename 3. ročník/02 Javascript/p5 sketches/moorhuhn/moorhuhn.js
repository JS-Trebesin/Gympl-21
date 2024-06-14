let ships = []
let airshipImage
let speed = 2
let score = 0



function preload() {
    airshipImage = loadImage("minishippy.svg")
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)

    setInterval(function() {
        let newShip = {
            x: random(0, window.innerWidth),
            y: random(0, window.innerHeight),
        }
        ships.push(newShip)
    }, 1000)

}


function draw() {
    background(255)

    airshipImage.resize(100, 0)

    textSize(16)
    textAlign(RIGHT, TOP)
    text("Score: " + score, width - 100, 10)
    

    for (let ship of ships) {
        image(airshipImage, ship.x, ship.y)
        ship.x -= speed

        if (ship.x < 0) {
            let index = ships.indexOf(ship)
            ships.splice(index, 1)
            score--
        }

    }
}

function mouseClicked() {
    ships.forEach((ship, index) => {
        if (
            mouseX >= ship.x &&
            mouseX <= ship.x + airshipImage.width &&
            mouseY >= ship.y && 
            mouseY <= ship.y + airshipImage.height
        ) {
            ships.splice(index, 1)
            score++
        }
    })
}