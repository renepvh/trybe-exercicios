
/*
let array = [4,2, 3, 2, 5, 8, 2, 3];

let repete = array[0]
let contador = 0;
function repeteMaisVezes() {
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] == repete) {
      contador +=1
    }
  }


  return repete
}

console.log(repeteMaisVezes() , "Quantidade de repetição: " + contador)
*/

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  // return numeros[indexNumeroRepetido];
  return contRepetido;

}


console.log(maisRepetido([4,2, 3, 2, 5, 8, 2, 3]))