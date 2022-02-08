function nomes() {
  let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  let maiorNome = array[0]
  for (let index = 0; index < array.length; index +=1) {
    // console.log(array[index].length)
    if (array[index].length > maiorNome.length) {
      maiorNome = array[index]
    }
  }
  
  
  return maiorNome
}

console.log(nomes())