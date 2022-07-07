const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const diamond = document.getElementById("diamond");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");

let cardList = [silver, gold, diamond];
let state = 1;

const moveRight = () => {
    const oldCard = cardList[state];
    const newCard = cardList[(state+1)%3];
    state = (state+1)%3;
    oldCard.style.animation = "moveOutRight ease-in-out 20s"
    setTimeout(() => {
        newCard.classList.toggle("show"); 
        newCard.style.animation = "moveInLeft ease-in-out 20s"
    }, 2000);
    setTimeout(() => {
        oldCard.classList.toggle("show");
    },20000)
    
}

const moveLeft = () => {
    const oldCard = cardList[state];
    const newCard = cardList[(state+4)%3];
    state = (state+4)%3;
    oldCard.classList.toggle("show");
    newCard.classList.toggle("show"); 
}




rightArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", moveLeft);