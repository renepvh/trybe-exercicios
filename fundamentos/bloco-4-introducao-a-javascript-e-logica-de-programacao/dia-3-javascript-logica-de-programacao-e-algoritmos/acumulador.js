/*
02 - Contar até 10
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.
*/

// let limit = 10
let soma = 0;

function accumulator(limit){
  // Desenvolva seu código nessa função
  for (let index = 1; index <= limit; index+=1) {
    soma += index;
  }
  console.log(soma);
}
accumulator(15)

module.exports = accumulator;






// let limite = 10
// let soma = 0;
// for (let index = 0; index <= limite; index += 1) {
//   soma += index;
// }

// console.log(soma);