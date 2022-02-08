let array = ['java','css', 'python','javascript', 'html', 'css'];

// let x = "Jesus"


let newArray = []



for (let index = 0; index < array.length; index += 1) {
  newArray.push(array[index].length);
  // if (array[index].length > maiorPalavra) {
  //   maiorPalavra = array[index]
  // }

}


let maior = newArray[0];

for (let i = 0; i < newArray.length; i += 1) {
  if (newArray[i] > maior) {
    maior = newArray[i]
    
  }
}


let menor = newArray[0];

for (let i = 0; i < newArray.length; i += 1) {
  if (newArray[i] < menor) {
    menor = newArray[i]
  }
}







console.log(newArray);
console.log(maior);
console.log(menor);