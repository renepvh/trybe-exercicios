function recebeNumeroNatural(number){
  let soma = 0;

  for (let index = 0; index <= number; index+=1) {
  
    soma += index;

  }
  
  
  return soma;
}

console.log(recebeNumeroNatural(5));