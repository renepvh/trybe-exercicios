function indiceMenorValor() {
  let array = [2, 4, 6, 7, 10, 0, -3];
  
  let menor = array[0]

  for (let index = 0; index < array.length; index +=1) {
    if (array[index] < menor) {
      menor = array[index]
    }
  }
  let pos = array.indexOf(menor)
  
  
  return pos
}

console.log(indiceMenorValor())