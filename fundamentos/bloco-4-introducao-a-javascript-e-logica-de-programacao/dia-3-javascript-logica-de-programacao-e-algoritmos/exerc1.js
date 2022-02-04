/*Credito do material: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript
*/




// let fatorial4 = 0;

// for (let i = 4; i < 4 && i >= 1; i -= 1) {

// }

// var fatorial = 5;
// var resultado = fatorial;
// for (var i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);


// var fatorial = 5;
// var resultado = fatorial;
// var primeiroMultipicador = fatorial - 1;
// for (var i = primeiroMultipicador; i > 1; i--) {
//     resultado *= i;
// }
// console.log(resultado);

// Resposta do exercício 1:

let fatorial = 10;
let res = fatorial;
let primeiroMultipicador = fatorial - 1;
for (let i = primeiroMultipicador; i > 1; i -= 1) {
  res *= i;
}

console.log(res);