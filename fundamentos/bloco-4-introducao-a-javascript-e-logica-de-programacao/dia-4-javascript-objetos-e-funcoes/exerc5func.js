let array = [2, 3, 2, 5, 8, 2, 3];

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