/*
let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo
*/

/*
let banco = "brasil"

let conta = {
  agencia: "0000",
  banco: {
    cod: "012",
    id: 4,
    nome: "TrybeBank",
    regiao: {
      regiao: "norte",
      estado: "rondonia"
    }
  },
};

let infoDoBanco = "banco";
console.log(conta[infoDoBanco]);

console.log(conta[infoDoBanco]["nome"]);

console.log(conta["agencia"]);

console.log(conta.banco.regiao.estado);
*/

/*
let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey
*/


/*
var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;
function ligarDesligar() {
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return statusCarro;
}

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;

  return "Acelerando a " + aceleracao + "m/s²";
}

function frear(decremento) {
  aceleracao = aceleracao - decremento;

  return "Desacelerando para " + aceleracao + "m/s²";
}

function girarVolante(anguloRotacao) {
  rotacaoDoVolante = anguloRotacao;

  return rotacaoDoVolante + "°";
}

ligarDesligar()
console.log(statusCarro)

acelerar(20)
console.log(aceleracao)

girarVolante(-45)

frear(5)
console.log(aceleracao)
*/


function bomDia() {
  return 'Bom dia!';
}

// console.log(bomDia()); // Bom dia!

console.log(bomDia())


let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado


function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais