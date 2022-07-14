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


const moveLeftThree = () => {
    let cardList = workflow.cardList;
    let state = workflow.state;
    let i = cardList.length;

    let oldCard = cardList[state];
    let middleCard1 = cardList[(state+1)%i];
    let middleCard2 = cardList[(state+2)%i];
    let newCard = cardList[(state+3)%i];
    if (oldCard.style.animation !== "") return;
    if (middleCard1.style.animation !== "") return;
    if (newCard.style.animation !== "") return;
    workflow.state = (state + 1) % i;
    

    newCard.classList.add("show3")
    newCard.style.animation = "moveLeftThreeIn ease-in-out " + animationSpeed;
    oldCard.style.animation = "moveLeftThreeOut ease-in-out " + animationSpeed;
    middleCard1.style.animation = "moveLeftThree1 ease-in-out " + animationSpeed;
    middleCard2.style.animation = "moveLeftThree2 ease-in-out " + animationSpeed;
    
    setTimeout(() => {
        middleCard1.classList.remove("show2")
        middleCard1.classList.add("show")
        middleCard2.classList.remove("show3")
        middleCard2.classList.add("show2")
        oldCard.classList.remove("show");
        oldCard.style.animation = ""
        middleCard1.style.animation = ""
        middleCard2.style.animation = ""
        newCard.style.animation = ""
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
    if (oldCard.style.animation !== "") return;
    if (middleCard1.style.animation !== "") return;
    if (newCard.style.animation !== "") return;
    workflow.state = (state + i-1) % i;
    

    newCard.classList.add("show")
    newCard.style.animation = "moveRightThreeIn ease-in-out " + animationSpeed;
    oldCard.style.animation = "moveRightThreeOut ease-in-out " + animationSpeed;
    middleCard1.style.animation = "moveRightThree1 ease-in-out " + animationSpeed;
    middleCard2.style.animation = "moveRightThree2 ease-in-out " + animationSpeed;
    
    setTimeout(() => {
        middleCard1.classList.remove("show")
        middleCard1.classList.add("show2")
        middleCard2.classList.remove("show2")
        middleCard2.classList.add("show3")
        oldCard.classList.remove("show3");
        oldCard.style.animation = ""
        middleCard1.style.animation = ""
        middleCard2.style.animation = ""
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
    if (window.matchMedia("(max-width: 767px)").matches) {
        if (workflow.state === 3) return;
        moveLeftOne(workflow)
        size ="s"
    } else if (window.matchMedia("(max-width: 991px").matches) {
        if (workflow.state === 2) return;
        moveLeftTwo(workflow)
        size="m"
    } else {
        if (workflow.state === 1) return;
        moveLeftThree()
        size="l"
    }
    changeColor(size)
}

const moveRightWorkflow = () => {
    if (workflow.state === 0) return;
    let size = ""
    if (window.matchMedia("(max-width: 767px").matches) {
        moveRightOne(workflow)
        size = "s"
    } else if (window.matchMedia("(max-width: 991px").matches) {
        moveRightTwo(workflow)
        size = "m"
    } else {
        moveRightThree();
        size = "l";
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
    if (window.matchMedia("(max-width: 767px)").matches) {
        products.cardList[products.state].classList.add("show")
        products.cardList[(products.state+1)%3].classList.remove("show2")
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
    } else if (window.matchMedia("(max-width: 991px)").matches) {
        products.cardList[products.state].classList.add("show")
        products.cardList[(products.state+1)%3].classList.add("show2")
        if (workflow.state === 3) {
            workflow.cardList[workflow.state].classList.remove("show")
            workflow.state = 2;
        }
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
        workflow.cardList[(workflow.state+2)%4].classList.remove("show3")
    } else {
        if (workflow.state >= 2) {
            workflow.cardList[workflow.state].classList.remove("show")
            workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
            workflow.state = 1;
        }
        workflow.cardList[workflow.state].classList.add("show")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
        workflow.cardList[(workflow.state+2)%4].classList.add("show3")
    }
}

window.addEventListener("resize", resize)
resize();
