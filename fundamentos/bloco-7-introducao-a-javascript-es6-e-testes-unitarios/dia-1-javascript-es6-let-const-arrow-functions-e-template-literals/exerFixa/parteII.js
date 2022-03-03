// console.log(Number.isInteger(3))

// function numeroFatorial (n) {
//   if (Number.isInteger(n) == true) {

//   }
    
// }

// numeroFatorial(5)


// const fatorial = num => num === 1 ? 1 : num * fatorial(num - 1); // de forma recursiva


// console.log(fatorial(4))


// const longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

// function maiorPalavra(string) {
//   var arrayStr = string.split(" ");
//   var maior = 0;
//   var palavra = null;
//   arrayStr.forEach(function(str) {
//       if (maior < str.length) {
//           maior = str.length;
//           palavra = str;
//       }
//   });
//   return palavra;
// }

// console.log(maiorPalavra(longestWord));

// // console.log(longestWord.split(" "));


function substituir(string) {
  const text = string;
  // console.log(text);
  const newstring = text.replace('x', 'Bebeto')
  
  return newstring;
}
console.log(substituir('Tryber x aqui!'));

const array = ['Html','CSS', 'JavaScript', 'Bootstrap', 'ES6'];

function concatena(text) {
  return `${text} Minhas cinco principais habilidades são:
  ${array}`
}

console.log(concatena(substituir('Tryber x aqui!')))