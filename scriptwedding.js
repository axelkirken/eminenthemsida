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

const moveLeft = (obj, num) => {
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;
    let oldCard = cardList[state];
    if (oldCard.style.animation !== "") return;
    oldCard.style.animation = `moveLeft${num}Out ease-in-out ${animationSpeed}`;
    if (num === 2 || num === 3) {
        var middleCard1 = cardList[(state+1)%i];
        middleCard1.style.animation = `moveLeft${num}1 ease-in-out ${animationSpeed}`;
    }
    if (num === 3) {
        var middleCard2 = cardList[(state+2)%i];
        middleCard2.style.animation = `moveLeft${num}2 ease-in-out ${animationSpeed}`;
    }
    let newCard = cardList[(state+num)%i];
    newCard.style.animation = `moveLeft${num}In ease-in-out ${animationSpeed}`;
    newCard.classList.add(`show${num}`);
    obj.state = (state + 1) % i;
    setTimeout(() => {
        if (num === 2 || num ===3) {
            middleCard1.classList.remove("show2");
            middleCard1.classList.add("show1");
            middleCard1.style.animation = "";
        }
        if (num ===3) {
            middleCard2.classList.remove("show3");
            middleCard2.classList.add("show2");
            middleCard2.style.animation = "";
        }        
        oldCard.classList.remove("show1");
        oldCard.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);  
}


const moveRight = (obj, num) => {
    console.log("test");
    let cardList = obj.cardList;
    let state = obj.state;
    let i = cardList.length;
    let oldCard = cardList[(state+num-1)%i];
    if (oldCard.style.animation !== "") return;
    oldCard.style.animation = `moveRight${num}Out ease-in-out ${animationSpeed}`;
    if (num === 2 || num === 3) {
        var middleCard1 = cardList[(state)%i];
        middleCard1.style.animation = `moveRight${num}1 ease-in-out ${animationSpeed}`;
    }
    if (num === 3) {
        var middleCard2 = cardList[(state+1)%i];
        middleCard2.style.animation = `moveRight${num}2 ease-in-out ${animationSpeed}`;
    }
    let newCard = cardList[(state+i-1)%i];
    newCard.style.animation = `moveRight${num}In ease-in-out ${animationSpeed}`;
    newCard.classList.add(`show1`);
    obj.state = (state + i-1) % i;
    setTimeout(() => {
        if (num === 2 || num ===3) {
            middleCard1.classList.remove("show1");
            middleCard1.classList.add("show2");
            middleCard1.style.animation = "";
        }
        if (num ===3) {
            middleCard2.classList.remove("show2");
            middleCard2.classList.add("show3");
            middleCard2.style.animation = "";
        }        
        oldCard.classList.remove(`show${num}`);
        oldCard.style.animation = "";
        newCard.style.animation = "";
    }, speed-2);  

}


const moveLeftProduct = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        moveLeft(products, 2)
    } else {
        moveLeft(products, 1)
    }
}

const moveRightProduct = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        moveRight(products, 2)
    } else {
        moveRight(products, 1)
    }
}


const moveLeftWorkflow = () => {
    if (window.matchMedia("(min-width: 992px").matches) {
        if (workflow.state === 1) return;
        moveLeft(workflow, 3)
        size="l"
    } else if (window.matchMedia("(min-width: 768px").matches) {
        if (workflow.state === 2) return;
        moveLeft(workflow, 2)
        size="m"
    } else {
        if (workflow.state === 3) return;
        moveLeft(workflow, 1)
        size ="s"
    } 
    changeColor(size)
}

const moveRightWorkflow = () => {
    if (workflow.state === 0) return;
    let size = ""
    if (window.matchMedia("(min-width: 992px").matches){
        moveRight(workflow, 3)
        size = "l";
    } else if (window.matchMedia("(min-width: 768px").matches) {
        moveRight(workflow , 2)
        size = "m"
    } else {
        moveRight(workflow, 1)
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
            workflow.cardList[workflow.state].classList.remove("show1")
            workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
            workflow.state = 1;
        }
        workflow.cardList[workflow.state].classList.add("show1")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
        workflow.cardList[(workflow.state+2)%4].classList.add("show3")
        size="l"
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        products.cardList[products.state].classList.add("show1")
        products.cardList[(products.state+1)%3].classList.add("show2")
        if (workflow.state === 3) {
            workflow.cardList[workflow.state].classList.remove("show1")
            workflow.state = 2;
        }
        workflow.cardList[workflow.state].classList.add("show1")
        workflow.cardList[(workflow.state+1)%4].classList.add("show2")
        workflow.cardList[(workflow.state+2)%4].classList.remove("show3")
        size="m"
    } else {
        products.cardList[products.state].classList.add("show1")
        products.cardList[(products.state+1)%3].classList.remove("show2")
        workflow.cardList[workflow.state].classList.add("show1")
        workflow.cardList[(workflow.state+1)%4].classList.remove("show2")
        size="s"
    } 
    changeColor(size);
}

window.addEventListener("resize", resize)
resize();
