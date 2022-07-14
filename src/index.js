let greeting = alert("Welcome!");

let customizedName = prompt("What is your name?");

let customizedH1 = document.querySelector("h1");
customizedH1.innerHTML = `Hello ${customizedName}!`;
