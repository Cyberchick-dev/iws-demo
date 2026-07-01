console.log("script.js is connected!");

// Animated Counter

function animateCounter(id, end, speed) {

let count = 0;

const element = document.getElementById(id);

const interval = setInterval(() => {

count++;

element.textContent = count;

if(count >= end){

clearInterval(interval);

}

}, speed);

}

animateCounter("experience",15,100);

animateCounter("projects",250,10);

animateCounter("clients",120,20);

animateCounter("support",24,50);

// ==========================
// BACK TO TOP BUTTON
// ==========================

const backToTop = document.getElementById("backToTop");

window.onscroll = function () {

if (document.documentElement.scrollTop > 100) {
backToTop.style.display = "block";
} else {
backToTop.style.display = "none";
}

};

backToTop.onclick = function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

};