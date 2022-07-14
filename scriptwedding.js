//Elements products
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const diamond = document.getElementById("diamond");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");

//Elements workflow
const firstStep = document.getElementById("firstStep");
const secondStep = document.getElementById("secondStep");
const thirdStep = document.getElementById("thirdStep");
const fourthStep = document.getElementById("fourthStep");
const leftArrow2 = document.getElementById("leftArrow2");
const rightArrow2 = document.getElementById("rightArrow2");

let speed = 1000;
let animationSpeed = String(speed / 1000) + "s";

//Carousel objects
const products = {
    cardList: [silver, gold, diamond],
    state: 1,
}

const workflow = {
    cardList: [firstStep, secondStep, thirdStep, fourthStep],
    state: 0,
}

//One card

const moveRightOne = (obj) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;
    let oldCard = cardList[state];
    let newCard = cardList[(state+i-1)%i];
    if (oldCard.style.animation !== "") return;
    obj.state = (state + i-1) % i;
    oldCard.style.animation = "moveRightOut ease-in-out " + animationSpeed;
    newCard.style.animation = "moveRightIn ease-in-out " + animationSpeed;
    newCard.classList.add("show"); 
    setTimeout(() => {
        oldCard.classList.remove("show");
        oldCard.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);    
}


const moveLeftOne = (obj) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;
    let oldCard = cardList[state];
    let newCard = cardList[(state+1)%i];
    if (oldCard.style.animation !== "") return;
    obj.state = (state + 1) % i;
    oldCard.style.animation = "moveLeftOut ease-in-out " + animationSpeed
    newCard.style.animation = "moveLeftIn ease-in-out " + animationSpeed
    newCard.classList.add("show"); 
    setTimeout(() => {
        oldCard.classList.remove("show");
        oldCard.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);    
}

// Two cards

const moveLeftTwo = (obj) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;
    let oldCard = cardList[state];
    let middleCard = cardList[(state+1)%i];
    let newCard = cardList[(state+2)%i];
    if (oldCard.style.animation !== "" || middleCard.style.animation !== "") return;
    obj.state = (state + 1) % i;
    oldCard.style.animation = "moveLeftTwoOut ease-in-out " + animationSpeed;
    middleCard.style.animation = "moveLeftTwo ease-in-out " + animationSpeed;
    newCard.style.animation = "moveLeftTwoIn ease-in-out " + animationSpeed;
    newCard.classList.add("show2")
    setTimeout(() => {
        oldCard.classList.remove("show");
        middleCard.classList.remove("show2");
        middleCard.classList.add("show");
        oldCard.style.animation = "";
        middleCard.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);  
}


const moveRightTwo = (obj) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;
    let oldCard = cardList[(state+1)%i];
    let middleCard = cardList[state];
    let newCard = cardList[(state+i-1)%i];
    obj.state = (state + i-1) % i;
    oldCard.style.animation = "moveRightTwoOut ease-in-out " + animationSpeed;
    middleCard.style.animation = "moveRightTwo ease-in-out " + animationSpeed;
    newCard.style.animation = "moveRightTwoIn ease-in-out " + animationSpeed;
    newCard.classList.add("show");
    setTimeout(() => {
        oldCard.classList.remove("show2");
        middleCard.classList.remove("show");
        middleCard.classList.add("show2");
        oldCard.style.animation = "";
        middleCard.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);  
}


// Three cards - only workflow carousel

const moveLeftThree = () => {
    let cardList = workflow.cardList;
    let state = workflow.state;
    let i = cardList.length;
    let oldCard = cardList[state];
    let middleCard1 = cardList[(state+1)%i];
    let middleCard2 = cardList[(state+2)%i];
    let newCard = cardList[(state+3)%i];
    if (oldCard.style.animation !== "" || middleCard1.style.animation !== "") return;
    workflow.state = (state + 1) % i;
    oldCard.style.animation = "moveLeftThreeOut ease-in-out " + animationSpeed;
    middleCard1.style.animation = "moveLeftThree1 ease-in-out " + animationSpeed;
    middleCard2.style.animation = "moveLeftThree2 ease-in-out " + animationSpeed;
    newCard.style.animation = "moveLeftThreeIn ease-in-out " + animationSpeed;
    newCard.classList.add("show3");
    setTimeout(() => {
        middleCard1.classList.remove("show2");
        middleCard1.classList.add("show");
        middleCard2.classList.remove("show3");
        middleCard2.classList.add("show2");
        oldCard.classList.remove("show");
        oldCard.style.animation = "";
        middleCard1.style.animation = "";
        middleCard2.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);  
}


const moveRightThree = () => {
    let cardList = workflow.cardList;
    let state = workflow.state;
    let i = cardList.length;
    let oldCard = cardList[(state+2)%i];
    let middleCard1 = cardList[(state)%i];
    let middleCard2 = cardList[(state+1)%i];
    let newCard = cardList[(state+i-1)%i];
    if (oldCard.style.animation !== "" || middleCard1.style.animation !== "") return;
    workflow.state = (state + i-1) % i;
    oldCard.style.animation = "moveRightThreeOut ease-in-out " + animationSpeed;
    middleCard1.style.animation = "moveRightThree1 ease-in-out " + animationSpeed;
    middleCard2.style.animation = "moveRightThree2 ease-in-out " + animationSpeed;
    newCard.style.animation = "moveRightThreeIn ease-in-out " + animationSpeed;
    newCard.classList.add("show");
    setTimeout(() => {
        oldCard.classList.remove("show3");
        middleCard1.classList.remove("show");
        middleCard1.classList.add("show2");
        middleCard2.classList.remove("show2");
        middleCard2.classList.add("show3");
        oldCard.style.animation = "";
        middleCard1.style.animation = "";
        middleCard2.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);  
}



const moveLeftProduct = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        moveLeftTwo(products)
    } else {
        moveLeftOne(products)
    }
}

const moveRightProduct = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        moveRightTwo(products)
    } else {
        moveRightOne(products)
    }
}


const moveLeftWorkflow = () => {
    if (window.matchMedia("(min-width: 992px").matches) {
        if (workflow.state === 1) return;
        moveLeftThree()
        size="l"
    } else if (window.matchMedia("(min-width: 768px").matches) {
        if (workflow.state === 2) return;
        moveLeftTwo(workflow)
        size="m"
    } else {
        if (workflow.state === 3) return;
        moveLeftOne(workflow)
        size ="s"
    } 
    changeColor(size)
}

const moveRightWorkflow = () => {
    if (workflow.state === 0) return;
    let size = ""
    if (window.matchMedia("(min-width: 992px").matches){
        moveRightThree();
        size = "l";
    } else if (window.matchMedia("(min-width: 768px").matches) {
        moveRightTwo(workflow)
        size = "m"
    } else {
        moveRightOne(workflow)
        size = "s"
    } 
    changeColor(size)
}


const changeColor = (size) => {
    const state = workflow.state;
    if (state === 0) {
        leftArrow2.style.background = "#cea198"
    } else leftArrow2.style.background = "#ce8b7e"
    var background;
    switch (size) {
        case "s": 
            background = ((state ===3)? "#cea198" : "#ce8b7e");
            break 
        case "m":
            background = ((state ===2)? "#cea198" : "#ce8b7e");
            break
        case "l":
            background = ((state ===1)? "#cea198" : "#ce8b7e");
            break
    }
    rightArrow2.style.background = background
}


rightArrow.addEventListener("click", moveLeftProduct);
leftArrow.addEventListener("click", moveRightProduct);
rightArrow2.addEventListener("click", moveLeftWorkflow);
leftArrow2.addEventListener("click", moveRightWorkflow);


const resize = () => {
    let size
    if (window.matchMedia("(min-width: 992px)").matches)  {
        if (workflow.state >= 2) {
            workflow.cardList[workflow.state].classList.remove("show")
            workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
            workflow.state = 1;
        }
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
        workflow.cardList[(workflow.state+2)%4].classList.add("show3")
        size="l"
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        products.cardList[products.state].classList.add("show")
        products.cardList[(products.state+1)%3].classList.add("show2")
        if (workflow.state === 3) {
            workflow.cardList[workflow.state].classList.remove("show")
            workflow.state = 2;
        }
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
        workflow.cardList[(workflow.state+2)%4].classList.remove("show3")
        size="m"
    } else {
        products.cardList[products.state].classList.add("show")
        products.cardList[(products.state+1)%3].classList.remove("show2")
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
        size="s"
    } 
    changeColor(size);
}

window.addEventListener("resize", resize)
resize();
