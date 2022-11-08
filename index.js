let homePoints = 0
let guestPoints = 0
let hpEl = document.getElementById("hp-el")
let gpEl = document.getElementById("gp-el")
const onehBtn = document.getElementById("oneh-btn")
const twohBtn = document.getElementById("twoh-btn")
const threehBtn = document.getElementById("threeh-btn")
const onegBtn = document.getElementById("oneg-btn")
const twogBtn = document.getElementById("twog-btn")
const threegBtn = document.getElementById("threeg-btn")
const newEl = document.getElementById("new")

  onehBtn.addEventListener("click",function () {
    homePoints += 1
    hpEl.textContent = homePoints
    
}) 

twohBtn.addEventListener("click",function () {
    homePoints += 2
    hpEl.textContent = homePoints
})
 
threehBtn.addEventListener("click",function (){
    homePoints += 3
    hpEl.textContent = homePoints
})

onegBtn.addEventListener("click",function(){
    guestPoints += 1
    gpEl.textContent = guestPoints
})

twogBtn.addEventListener("click",function (){
    guestPoints += 2
    gpEl.textContent = guestPoints
})

threegBtn.addEventListener("click",function (){
    guestPoints += 3
    gpEl.textContent = guestPoints
})

newEl.addEventListener("click",function(){
    hpEl.textContent = 0
    gpEl.textContent = 0
    homePoints = 0
    guestPoints = 0 
})






