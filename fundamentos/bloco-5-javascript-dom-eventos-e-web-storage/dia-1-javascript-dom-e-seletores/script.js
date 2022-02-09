
document.getElementById("header-container").style.background = "#00b069";

let emerg = document.querySelectorAll(".emergency-tasks");

for (let i = 0; i < emerg.length; i +=1) {
  emerg[i].style.background = "#ff9f84";
}

let roxo = document.querySelectorAll(".h3roxo");

for (i = 0; i < roxo.length; i += 1) {
  roxo[i].style.background = "#a500f3";
}


let semEmerg = document.getElementsByClassName("no-emergency-tasks");

for (i = 0; i < semEmerg.length; i += 1) {
  semEmerg[i].style.background = "#f9db5e";
}

let black = document.querySelectorAll(".h3black");

for (i = 0; i < black.length; i += 1) {
  black[i].style.background = "black"
}

document.getElementById("footer-container").style.background = "#003533"