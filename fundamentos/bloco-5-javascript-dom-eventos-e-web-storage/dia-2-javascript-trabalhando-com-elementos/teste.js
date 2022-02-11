// Crie um irmão para elementoOndeVoceEsta .
let elementos = document.querySelector("#pai");

let elementosOndesVcsEstao = document.createElement("section");

elementosOndesVcsEstao.id = "irmaoElementoOndeVoceEsta";

elementos.appendChild(elementosOndesVcsEstao);

// Crie um filho para elementoOndeVoceEsta .
let filho = document.getElementById("elementoOndeVoceEsta");

let filhoDoElemento = document.createElement("section");

filhoDoElemento.id = "terceiroFilhoDoFilho";

filho.appendChild(filhoDoElemento);

// Crie um filho para primeiroFilhoDoFilho .
let junior = document.getElementById("primeiroFilhoDoFilho");

let filhoJunior = document.createElement("section");

filhoJunior.id = "primogenito";

junior.appendChild(filhoJunior);

// A partir desse filho criado, acesse terceiroFilho .
let acessarTerceiroFilho = filhoJunior;

acessarTerceiroFilho.parentElement.parentElement.nextElementSibling;

console.log(acessarTerceiroFilho);


// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let filhoOne = document.getElementById("primeiroFilho")

// elementos.remove("primeiroFilho");
filhoOne.remove

