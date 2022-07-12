const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const diamond = document.getElementById("diamond");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");

let cardList = [silver, gold, diamond];
let state = 1;
let speed = 1500
let animationSpeed = String(speed / 1000) + "s"

const moveRightOne = () => {
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

const moveLeftOne = () => {
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


const moveLeftTwo = () => {
    let oldCard = cardList[state];
    let middleCard = cardList[(state+1)%3];
    let newCard = cardList[(state+2)%3];
    if (oldCard.style.animation !== "") return;
    if (middleCard.style.animation !== "") return;
    if (newCard.style.animation !== "") return;
    state = (state + 1) % 3;
    

    newCard.classList.add("show2")
    newCard.style.animation = "moveInRightTwo ease-in-out " + animationSpeed;
    oldCard.style.animation = "moveOutLeftTwo ease-in-out " + animationSpeed;
    middleCard.style.animation = "moveLeft ease-in-out " + animationSpeed;
    
    setTimeout(() => {
        middleCard.classList.remove("show2")
        middleCard.classList.add("show")
        oldCard.classList.remove("show");
        oldCard.style.animation = ""
        middleCard.style.animation = ""
        newCard.style.animation = ""
    }, speed);  


}


const moveLeft = () => {
    let screenSmall = window.matchMedia("(max-width: 768px)")
    if (screenSmall.matches) {
        moveLeftOne()
    } else {
        moveLeftTwo()
    }
}

const moveRight = () => {
    const screenSmall = window.matchMedia("(max-width: 768px")
    if (screenSmall.matches) {
        moveRightOne()
        moveRightTwo()
    }
}

const resize = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        cardList[state].classList.add("show")
        cardList[(state+1)%3].classList.remove("show2")
    } else {
        cardList[state].classList.add("show")
        cardList[(state+1)%3].classList.add("show2")
    }
}
rightArrow.addEventListener("click", moveLeft);
leftArrow.addEventListener("click", moveRight);

window.addEventListener("resize", resize)



resize();
