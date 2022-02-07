function indiceMaiorValor() {
  let array = [2,3,6,7,10,1];
  let maior = array[0]
  // let pos = array.indexOf(maior)
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] > maior) {
      maior = array[index]
    }
  }
  let pos = array.indexOf(maior)
  
  
  return pos
}

console.log(indiceMaiorValor())