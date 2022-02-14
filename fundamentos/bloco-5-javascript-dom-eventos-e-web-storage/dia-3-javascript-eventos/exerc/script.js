function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercicio 1
window.onload = criaDias

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDias(){

  let days = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1){
    let dayItem = dezDaysList[index];

    let diaLista = document.createElement("li");

    if (dayItem === 24 | dayItem === 31) {
      diaLista.className = "day holiday";
      diaLista.innerHTML = dayItem;
      days.appendChild(diaLista)
    } else if (dayItem === 4 | dayItem === 11 | dayItem === 18) {
      diaLista.className = "day friday";
      diaLista.innerHTML = dayItem;
      days.appendChild(diaLista);
    } else if (dayItem === 25) {
      diaLista.className = "day holiday friday";
      diaLista.innerHTML = dayItem;
      days.appendChild(diaLista);
    } else {
      diaLista.innerHTML = dayItem;
      diaLista.className = "day";
      days.appendChild(diaLista)
    }
  };
}

//Exercício 2
function buttonFeriado(nomeButao) {
  let botao = document.querySelector(".buttons-container");
  let criaBotao = document.createElement("button");
  criaBotao.id = "btn-holiday";
  criaBotao.innerText = nomeButao
  botao.appendChild(criaBotao);
}
buttonFeriado("Feriado")


//Exercício 3
function adicionaFeriados() {
  let botaoFeriado = document.querySelector("#btn-holiday");
  let diasFeriados = document.querySelectorAll(".holiday");
  let corDeFundo = "rgb(238,238,238)";
  let novaCor = "white";

  botaoFeriado.addEventListener("click", function() {
    for (let index = 0; index < diasFeriados.length; index += 1) {
      if (diasFeriados[index].style.backgroundColor === novaCor) {
        diasFeriados[index].style.backgroundColor = corDeFundo;
      } else {
        diasFeriados[index].style.backgroundColor = novaCor;
      };
    };
  });
};
adicionaFeriados();


// Exercicio 4

function buttonFriday(nomeButton) {
  let botao = document.querySelector(".buttons-container");
  let creaBotao = document.createElement("button");
  creaBotao.id = "btn-friday";
  creaBotao.innerText = nomeButton;
  botao.appendChild(creaBotao);
}
buttonFriday("Sexta-feira");
