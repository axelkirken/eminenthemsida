//Elements products
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const diamond = document.getElementById("diamond");
const silver = document.getElementById("silver");
const gold = document.getElementById("gold");
const productCards = document.getElementById("productCards")

//Elements workflow
const firstStep = document.getElementById("firstStep");
const secondStep = document.getElementById("secondStep");
const thirdStep = document.getElementById("thirdStep");
const fourthStep = document.getElementById("fourthStep");
const leftArrow2 = document.getElementById("leftArrow2");
const rightArrow2 = document.getElementById("rightArrow2");
const workflowCards = document.getElementById("workflowCards")

let speed = 800;
let animationSpeed = String(speed / 1000) + "s";

//Carousel objects
const products = {
    cardList: [silver, gold, diamond],
    state: 1, //visible card closest to left side
}

const workflow = {
    cardList: [firstStep, secondStep, thirdStep, fourthStep],
    state: 0, //visible card closest to left side
}

const moveLeft = (obj, num) => {
    //object: products/workflow with attributes cardList and state. num: number of cards shown simultaneously
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
    if (window.matchMedia("(min-width: 1100px").matches) {
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
    if (window.matchMedia("(min-width: 1100px").matches){
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
    //Change color of arrow when at start or end. size should equal "s", "m" or "l" for small/medium/large screens.
    const state = workflow.state;
    if (state === 0) {
        leftArrow2.classList.add("lightArrow")
    } else leftArrow2.classList.remove("lightArrow")
    var light;
    switch (size) {
        case "s": 
            light = ((state ===3)? true : false);
            break 
        case "m":
            light = ((state ===2)? true : false);
            break
        case "l":
            light = ((state ===1)? true : false);
            break
    }
    if (light) rightArrow2.classList.add("lightArrow")
    else rightArrow2.classList.remove("lightArrow")
}


rightArrow.addEventListener("click", moveLeftProduct);
leftArrow.addEventListener("click", moveRightProduct);
rightArrow2.addEventListener("click", moveLeftWorkflow);
leftArrow2.addEventListener("click", moveRightWorkflow);


const resize = () => {
    //Adapts window on resize
    let size
    if (window.matchMedia("(min-width: 1100px)").matches)  {
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


//Makes carousels swipeable
productCards.addEventListener('touchstart', handleTouchStart, false);        
productCards.addEventListener('touchmove', function(event) {
    handleTouchMove(event, "products")
}, false);
workflowCards.addEventListener('touchstart', handleTouchStart, false);        
workflowCards.addEventListener('touchmove', function(event) {
    handleTouchMove(event, "workflow")
}, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches            // browser API
}                                                     
     
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt, section) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            switch (section) {
                case "products":
                    moveLeftProduct();
                    break
                case "workflow":
                    moveLeftWorkflow();
                    break
            }
        } else {
            switch (section) {
                case "products":
                    moveRightProduct();
                    break
                case "workflow":
                    moveRightWorkflow();
                    break
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            return
        } else { 
            return
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


//Moving dots in background
! function() {
    "use strict";
    var t, i = {
            screen: {
                elem: null,
                callback: null,
                ctx: null,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                init: function(t, i, s) {
                    return this.elem = document.getElementById(t), this.callback = i || null, "CANVAS" == this.elem.tagName && (this.ctx = this.elem.getContext("2d")), window.addEventListener("resize", function() {
                        this.resize()
                    }.bind(this), !1), this.elem.onselectstart = function() {
                        return !1
                    }, this.elem.ondrag = function() {
                        return !1
                    }, s && this.resize(), this
                },
                resize: function() {
                    var t = this.elem;
                    for (this.width = t.offsetWidth, this.height = t.offsetHeight, this.left = 0, this.top = 0; null != t; t = t.offsetParent) this.left += t.offsetLeft, this.top += t.offsetTop;
                    this.ctx && (this.elem.width = this.width, this.elem.height = this.height), this.callback && this.callback()
                }
            }
        },
        s = function(t, i) {
            this.x = t, this.y = i, this.magnitude = t * t + i * i, this.computed = 0, this.force = 0
        };
    s.prototype.add = function(t) {
        return new s(this.x + t.x, this.y + t.y)
    };
    var h = function(t) {
        var i = .1,
            h = 1.5;
        this.vel = new s((Math.random() > .5 ? 1 : -1) * (.1 + .05 * Math.random()), (Math.random() > .5 ? 1 : -1) * (.1+ Math.random())), this.pos = new s(.2 * t.width + Math.random() * t.width * .6, .2 * t.height + Math.random() * t.height * .6), this.size = t.wh / 15 + (1.4 * Math.random() + .1) * (t.wh / 15), this.width = t.width, this.height = t.height
    };
    h.prototype.move = function() {
        this.pos.x >= this.width - this.size ? (this.vel.x > 0 && (this.vel.x = -this.vel.x), this.pos.x = this.width - this.size) : this.pos.x <= this.size && (this.vel.x < 0 && (this.vel.x = -this.vel.x), this.pos.x = this.size), this.pos.y >= this.height - this.size ? (this.vel.y > 0 && (this.vel.y = -this.vel.y), this.pos.y = this.height - this.size) : this.pos.y <= this.size && (this.vel.y < 0 && (this.vel.y = -this.vel.y), this.pos.y = this.size), this.pos = this.pos.add(this.vel)
    };
    var e = function(t, i, e, o, n) {
        this.step = 5, this.width = t, this.height = i, this.wh = Math.min(t, i), this.sx = Math.floor(this.width / this.step), this.sy = Math.floor(this.height / this.step), this.paint = !1, this.metaFill = r(t, i, t, o, n), this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1], this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0], this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1], this.grid = [], this.balls = [], this.iter = 0, this.sign = 1;
        for (var a = 0; a < (this.sx + 2) * (this.sy + 2); a++) this.grid[a] = new s(a % (this.sx + 2) * this.step, Math.floor(a / (this.sx + 2)) * this.step);
        for (var l = 0; l < e; l++) this.balls[l] = new h(this)
    };
    e.prototype.computeForce = function(t, i, s) {
        var h, e = s || t + i * (this.sx + 2);
        if (0 === t || 0 === i || t === this.sx || i === this.sy) h = .6 * this.sign;
        else {
            h = 0;
            for (var r = this.grid[e], o = 0, n; n = this.balls[o++];) h += n.size * n.size / (-2 * r.x * n.pos.x - 2 * r.y * n.pos.y + n.pos.magnitude + r.magnitude);
            h *= this.sign
        }
        return this.grid[e].force = h, h
    }, e.prototype.marchingSquares = function(t) {
        var i = t[0],
            s = t[1],
            h = t[2],
            e = i + s * (this.sx + 2);
        if (this.grid[e].computed === this.iter) return !1;
        for (var r, o = 0, n = 0; n < 4; n++) {
            var l = i + this.ix[n + 12] + (s + this.ix[n + 16]) * (this.sx + 2),
                d = this.grid[l].force;
            (d > 0 && this.sign < 0 || d < 0 && this.sign > 0 || !d) && (d = this.computeForce(i + this.ix[n + 12], s + this.ix[n + 16], l)), Math.abs(d) > 1 && (o += Math.pow(2, n))
        }
        if (15 === o) return [i, s - 1, !1];
        5 === o ? r = 2 === h ? 3 : 1 : 10 === o ? r = 3 === h ? 0 : 2 : (r = this.mscases[o], this.grid[e].computed = this.iter);
        var p = this.step / (Math.abs(Math.abs(this.grid[i + this.plx[4 * r + 2] + (s + this.ply[4 * r + 2]) * (this.sx + 2)].force) - 1) / Math.abs(Math.abs(this.grid[i + this.plx[4 * r + 3] + (s + this.ply[4 * r + 3]) * (this.sx + 2)].force) - 1) + 1);
        return a.lineTo(this.grid[i + this.plx[4 * r] + (s + this.ply[4 * r]) * (this.sx + 2)].x + this.ix[r] * p, this.grid[i + this.plx[4 * r + 1] + (s + this.ply[4 * r + 1]) * (this.sx + 2)].y + this.ix[r + 4] * p), this.paint = !0, [i + this.ix[r + 4], s + this.ix[r + 8], r]
    }, e.prototype.renderMetaballs = function() {
        for (var t = 0, i; i = this.balls[t++];) i.move();
        for (this.iter++, this.sign = -this.sign, this.paint = !1, a.fillStyle = this.metaFill, a.beginPath(), t = 0; i = this.balls[t++];) {
            var s = [Math.round(i.pos.x / this.step), Math.round(i.pos.y / this.step), !1];
            do {
                s = this.marchingSquares(s)
            } while (s);
            this.paint && (a.fill(), a.closePath(), a.beginPath(), this.paint = !1)
        }
    };
    var r = function(t, i, s, h, e) {
            var r = a.createRadialGradient(t / 1, i / 1, 0, t / 1, i / 1, s);
            return r.addColorStop(0, h), r.addColorStop(1, e), r
        },
        o = function() {
            requestAnimationFrame(o), a.clearRect(0, 0, n.width, n.height), t.renderMetaballs()
        },
        n = i.screen.init("liquid", null, !0),
        a = n.ctx;
    n.resize(), t = new e(n.width, n.height, 6, "#dfb2a9", "#dfb2a9"), o()
}();

/* Navigationsbar */
/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (screen.width >= 992) return;
    if (document.documentElement.scrollTop > screen.height * 0.8) {
        document.getElementById("headerBar").style.top = "0%";
    } else {
        document.getElementById("headerBar").style.top = "-100%";
    }
} */

const body = document.querySelector("body")
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button")
const navOverlay = document.getElementById("navOverlay");
const navOverlayContent = document.getElementById("navOverlayContent");

const scrollStop = (event) => {
    event.preventDefault();
}

/* Open when someone clicks on the span element */
const openNav = () => {
    navOverlay.style.height = "100%";
    navOverlayContent.style.top = "25%";
    menuButton.style.display = "none";
    body.addEventListener("touchmove", scrollStop, { passive: false });
}

/* Close when someone clicks on the "x" symbol inside the overlay */
const closeNav = () => {
    navOverlay.style.height = "0%";
    navOverlayContent.style.top = "0%";
    menuButton.style.display = "inline";
    body.removeEventListener("touchmove", scrollStop);
}

menuButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);
navOverlay.addEventListener("click", closeNav);


/* Formulär */

const formSuccess = () => {
    contactForm.classList.add("form-hide");
    thankYou.classList.remove("form-hide");
    contactForm.reset();
    /* setTimeout(() => {
        contactForm.classList.remove("form-hide");
        thankYou.classList.add("form-hide");
    }, 5000); */
}

const formFailure = () => {
    alert("Ojdå, något gick visst fel. Skriv gärna till oss på vår e-post info@eminentfilm.se istället!")
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.site = "Wedding";

    fetch("https://xiwpkasq5c.execute-api.eu-north-1.amazonaws.com/final/contact-us", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => formSuccess())
    .catch(err => formFailure())
}

const contactForm = document.getElementById("contact-form");
const thankYou = document.getElementById("thankYou");
contactForm.addEventListener("submit", handleSubmit);
