const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const diamond = document.getElementById("diamond");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");

let cardList = [silver, gold, diamond];
let state = 1;
let speed = 1500
let animationSpeed = String(speed / 1000) + "s"

const moveRight = () => {
    // Select new card
    let oldCard = cardList[state];
    
    if (oldCard.style.animation !== "") return;

    state = (state + 2) % 3;
    let newCard = cardList[state];

    oldCard.style.animation = "moveOutRight ease-in-out " + animationSpeed
    newCard.style.animation = "moveInLeft ease-in-out " + animationSpeed
    newCard.classList.toggle("show"); 

    setTimeout(() => {
        oldCard.classList.toggle("show");
        oldCard.style.animation = ""
        newCard.style.animation = ""
    }, speed);    
}

const moveLeft = () => {
    // Select new card
    let oldCard = cardList[state];

    if (oldCard.style.animation !== "") return;

    state = (state + 1) % 3;
    let newCard = cardList[state];


    oldCard.style.animation = "moveOutLeft ease-in-out " + animationSpeed
    newCard.style.animation = "moveInRight ease-in-out " + animationSpeed
    newCard.classList.toggle("show"); 

    setTimeout(() => {
        oldCard.classList.toggle("show");
        oldCard.style.animation = ""
        newCard.style.animation = ""
    }, speed);    
}

rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);