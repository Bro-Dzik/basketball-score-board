let homePoints = 0
let guestPoints = 0
let hpEl = document.getElementById("hp-el")
let gpEl = document.getElementById("gp-el")

function homeone() {
    homePoints += 1
    hpEl.textContent = homePoints
    
}
function hometwo() {
    homePoints += 2
    hpEl.textContent = homePoints
}
function homethree(){
    homePoints += 3
    hpEl.textContent = homePoints
}

function guestone(){
    guestPoints += 1
    gpEl.textContent = guestPoints
}
function guesttwo(){
    guestPoints += 2
    gpEl.textContent = guestPoints
}
function guestthree(){
    guestPoints += 3
    gpEl.textContent = guestPoints
}

function newgame(){
    hpEl.textContent = 0
    gpEl.textContent = 0
    homePoints = 0
    guestPoints = 0 
}
