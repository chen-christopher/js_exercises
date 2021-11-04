let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function displayTotal() {
  let allP = document.querySelectorAll("p");
  let newP = document.createElement("p");
  newP.innerText = `There are ${allP.length} p elements on this page!`;
  div3.appendChild(newP);
  console.log(allP.length);
}

function div1Total() {
  let totalP = div1.querySelectorAll("p");
  let newP = document.createElement("p");
  newP.innerText = `There are ${totalP.length} p elements in div 1`;
  div4.appendChild(newP);
}

function div2Total() {
  let totalP = div2.querySelectorAll("p");
  console.log(totalP.length);
  let newP = document.createElement("p");
  newP.innerText = `There are ${totalP.length} p elements in div 2`;
  div5.appendChild(newP);
}

button1.addEventListener("click", displayTotal);
button2.addEventListener("click", div1Total);
button3.addEventListener("click", div2Total);
