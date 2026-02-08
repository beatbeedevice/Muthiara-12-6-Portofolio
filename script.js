const sakuraContainer = document.querySelector(".sakura");

function createPetal(){
const petal = document.createElement("span");
petal.innerHTML = "🌸";

petal.style.left = Math.random()*100 + "vw";
petal.style.animationDuration = (Math.random()*3+4)+"s";

sakuraContainer.appendChild(petal);

setTimeout(()=> petal.remove(),7000);
}

setInterval(createPetal,300);
