/*
06 - Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/

function oddNumbers(){
  // Desenvolva seu código nessa função
  for (let index = 0; index <= 50; index +=1){
    if(index % 2 !=0) {
      console.log(index);
      
    }
  }
}
oddNumbers()
module.exports = oddNumbers;




// var myString = 'Hello World. How are you doing?';
// var splits = myString.split(' ', 3);

// console.log(splits);
