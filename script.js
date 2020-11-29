const compare = document.getElementById("compare");
const compareBtn = document.getElementById("compare-button");
const closeBtn = document.getElementById("close")
var lightCup = document.getElementById("light");
var classicCup = document.getElementById("classic");
var duoCup = document.getElementById("duo");
var lightContent = document.getElementById("light-content");
var classicContent = document.getElementById("classic-content");
var duoContent = document.getElementById("duo-content");
var item = document.getElementsByClassName("item");
var question = document.getElementsByClassName("item--show");
var answer = document.getElementsByClassName("answer");


//save functions
function open() {
    compareBtn.classList.toggle("change");
    compare.classList.toggle("compare--open");
}

function close() {
    closeBtn.classList.toggle("change");
    compare.classList.toggle("compare--open")
}
//choose functions
function lightToggler () {
    lightContent.classList.add("show")
    if (classicContent.classList.contains('show')){
        classicContent.classList.remove('show')
    }
    if (duoContent.classList.contains('show')){
        duoContent.classList.remove('show')
    }
    lightCup.classList.add("active")
    if (classicCup.classList.contains('active')){
        classicCup.classList.remove('active')
    }
    if (duoCup.classList.contains('active')){
        duoCup.classList.remove('active')
    }
}

function classicToggler () {
    classicContent.classList.add("show")
    if (lightContent.classList.contains('show')){
        lightContent.classList.remove('show')
    }
    if (duoContent.classList.contains('show')){
        duoContent.classList.remove('show')
    }
    classicCup.classList.add("active")
    if (lightCup.classList.contains('active')){
        lightCup.classList.remove('active')
    }
    if (duoCup.classList.contains('active')){
        duoCup.classList.remove('active')
    }
}

function duoToggler() {
    duoContent.classList.add("show")
    if (lightContent.classList.contains('show')){
        lightContent.classList.remove('show')
    }
    if (classicContent.classList.contains('show')){
        classicContent.classList.remove('show')
    }
    duoCup.classList.add("active")
    if (classicCup.classList.contains('active')){
        classicCup.classList.remove('active')
    }
    if (lightCup.classList.contains('active')){
        lightCup.classList.remove('active')
    }
}
//save eventListeners
compareBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);

//choose eventListeners
lightCup.addEventListener("click", lightToggler);
classicCup.addEventListener("click", classicToggler);
duoCup.addEventListener("click", duoToggler);

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (answer.style.display === "none") {
          answer.style.display = "block";
        }
    });
}
