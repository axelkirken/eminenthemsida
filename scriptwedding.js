const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const diamond = document.getElementById("diamond");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");

let speed = 1000;
let animationSpeed = String(speed / 1000) + "s";

const firstStep = document.getElementById("firstStep");
const secondStep = document.getElementById("secondStep");
const thirdStep = document.getElementById("thirdStep");
const fourthStep = document.getElementById("fourthStep");
const leftArrow2 = document.getElementById("leftArrow2");
const rightArrow2 = document.getElementById("rightArrow2")


const products = {
    cardList: [silver, gold, diamond],
    state: 1,
}

const workflow = {
    cardList: [firstStep, secondStep, thirdStep, fourthStep],
    state: 0,
}


const moveRightOne = (obj) => {
    // Select new card
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;

    let oldCard = cardList[state];
    let newCard = cardList[(state+i-1)%i];
    
    if (oldCard.style.animation !== "") return;

    obj.state = (state + i-1) % i;
    
    oldCard.style.animation = "moveOutRight ease-in-out " + animationSpeed
    newCard.style.animation = "moveInLeft ease-in-out " + animationSpeed
    newCard.classList.toggle("show"); 

    setTimeout(() => {
        oldCard.classList.toggle("show");
        oldCard.style.animation = ""
        newCard.style.animation = ""
    }, speed-2);    
}


const moveLeftOne = (obj) => {
    // Select new card
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;

    let oldCard = cardList[state];
    let newCard = cardList[(state+1)%i];
    if (oldCard.style.animation !== "") return;
    obj.state = (state + 1) % i;
    
    oldCard.style.animation = "moveOutLeft ease-in-out " + animationSpeed
    newCard.style.animation = "moveInRight ease-in-out " + animationSpeed
    newCard.classList.toggle("show"); 

    setTimeout(() => {
        oldCard.classList.toggle("show");
        oldCard.style.animation = ""
        newCard.style.animation = ""
    }, speed-2);    
}


const moveLeftTwo = (obj) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;

    let oldCard = cardList[state];
    let middleCard = cardList[(state+1)%i];
    let newCard = cardList[(state+2)%i];
    if (oldCard.style.animation !== "") return;
    if (middleCard.style.animation !== "") return;
    if (newCard.style.animation !== "") return;
    obj.state = (state + 1) % i;
    

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
    }, speed-2);  
}


const moveRightTwo = (obj) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;

    let oldCard = cardList[(state+1)%i];
    let middleCard = cardList[state];
    let newCard = cardList[(state+i-1)%i];
    if (oldCard.style.animation !== "") return;
    if (middleCard.style.animation !== "") return;
    if (newCard.style.animation !== "") return;
    obj.state = (state + i-1) % i;
    

    newCard.classList.add("show")
    newCard.style.animation = "moveInLeftTwo ease-in-out " + animationSpeed;
    oldCard.style.animation = "moveOutRightTwo ease-in-out " + animationSpeed;
    middleCard.style.animation = "moveRight ease-in-out " + animationSpeed;
    
    setTimeout(() => {
        middleCard.classList.remove("show")
        middleCard.classList.add("show2")
        oldCard.classList.remove("show2");
        oldCard.style.animation = ""
        middleCard.style.animation = ""
        newCard.style.animation = ""
    }, speed-2);  
}


const moveLeftProduct = () => {
    let screenSmall = window.matchMedia("(max-width: 768px)")
    if (screenSmall.matches) {
        moveLeftOne(products)
    } else {
        moveLeftTwo(products)
    }
}

const moveRightProduct = () => {
    const screenSmall = window.matchMedia("(max-width: 768px")
    if (screenSmall.matches) {
        moveRightOne(products)
    } else {
        moveRightTwo(products)
    }
}


const moveLeftWorkflow = () => {
    let screenSmall = window.matchMedia("(max-width: 768px)")
    if (screenSmall.matches) {
        if (workflow.state === 3) return;
        moveLeftOne(workflow)
    } else {
        if (workflow.state === 2) return;
        moveLeftTwo(workflow)
    }
}

const moveRightWorkflow = () => {
    if (workflow.state === 0) return;
    const screenSmall = window.matchMedia("(max-width: 768px")
    if (screenSmall.matches) {
        moveRightOne(workflow)
    } else {
        moveRightTwo(workflow)
    }
}


rightArrow.addEventListener("click", moveLeftProduct);
leftArrow.addEventListener("click", moveRightProduct);
rightArrow2.addEventListener("click", moveLeftWorkflow);
leftArrow2.addEventListener("click", moveRightWorkflow);


const resize = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        products.cardList[products.state].classList.add("show")
        products.cardList[(products.state+1)%3].classList.remove("show2")
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
    } else {
        products.cardList[products.state].classList.add("show")
        products.cardList[(products.state+1)%3].classList.add("show2")
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
    }
}

window.addEventListener("resize", resize)
resize();
