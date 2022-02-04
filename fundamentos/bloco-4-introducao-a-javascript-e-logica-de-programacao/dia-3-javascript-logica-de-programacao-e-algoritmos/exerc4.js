let limite = 50;

let newArray = [];

for (let numero =2; numero <= limite; numero+=1) {
  let ehPrimo = true;
  for (let divisor = 2; divisor < numero; divisor+=1) {
    if (numero % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }
  if (ehPrimo) {
    console.log(numero);
    newArray.push(numero)
  }
}




let maior = newArray[0];

for (let i = 0; i < newArray.length; i += 1) {
  if (newArray[i] > maior) {
    maior = newArray[i]
    
  }
}

console.log(maior);